import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../userContext';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import axios from 'axios';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';

function Pgpratos({ route }) {
    const { id } = route.params;
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    const [restaurant, setRestaurant] = useState(null);
    const [products, setProducts] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [itens, setItens] = useState([]);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetchRestaurant();
        getProducts(id);
    }, []);

    const verifyUserHaveAOrder = async(req, res) => {
        try {
            const response = await axios.get(`http://localhost:4000/cart/user/${user.email}`)
            return response.data;
        } catch(e) {
            console.log('error in requisition', e);
        }
    }

    const fetchRestaurant = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/restaurants/${id}`);
            setRestaurant(response.data);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const createOrder = async () => {
        try {
            const response = await axios.post(`http://localhost:4000/cart`, {
                userEmail: user.email,
                restaurantID: id,
                dateandhour: new Date(),
                state: 'cart',
                itens,
            });
            setOrderId(response.data.orderId);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const addInCart = async (product, quantity) => {
        const newItens = [...itens, { productid: product.id, quantity }];
        setItens(newItens);
        try {
            if(orders) {
                return orders.order_state == 'cart' && orders.restaurant_name !== restaurant.name ? (true) : (false);
            }
            if (!orderId) {
                await createOrder();
            } else {
                await axios.put(`http://localhost:4000/cart/${orderId}`, { itens: newItens, state: 'cart' });
            }
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const finishOrder = async () => {
        try {
            await axios.patch(`http://localhost:4000/cart/state/${orderId}`, { state: 'preparing' });
            const order = await getOrder(orderId);
            navigation.navigate('DetailsOrder', { order });
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const getOrder = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/cart/${id}`);
            return response.data;
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const getProducts = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/products/${id}`);
            setProducts(response.data);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    console.log(products.products);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.margem}>
                    {restaurant ? (
                        <>
                            <Image source={{ uri: restaurant.image }} style={styles.image} />
                            <Text style={styles.restaurante}>{restaurant.name}</Text>
                            <Text style={styles.subInfo1}>Horário de funcionamento: {restaurant.operation}</Text>
                        </>
                    ) : (
                        <Text>Loading restaurant...</Text>
                    )}
                </View>
                <View style={styles.cardContainerGeral}>
                    {products.products ? (
                        products.products.map((product) => (
                            <Products key={product.id} data={product} addInCart={addInCart} />
                        ))
                    ) : (
                        <Text>Loading products...</Text>
                    )}
                </View>
                {itens.length > 0 && (
                    <TouchableOpacity onPress={finishOrder}>
                        <Text>Finalizar pedido</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
}

export default Pgpratos;
