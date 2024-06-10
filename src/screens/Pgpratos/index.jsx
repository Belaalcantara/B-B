import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../userContext';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import axios from 'axios';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import FinishOrder from '../../components/FinishOrder';
import Modal from '../../components/Modal';

function Pgpratos({ route }) {
    const { id } = route.params;
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    const [restaurant, setRestaurant] = useState(null);
    const [products, setProducts] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [itens, setItens] = useState([]);
    const [orders, setOrders] = useState(null);

    const [openModal, setOpenModal] = useState(false);
    const [order, setOrder] = useState(null);

    const [openFinish, setOpenFinish] = useState(false);


    useEffect(() => {
        fetchRestaurant();
        getProducts(id);
        if(user) {
            checkUserOrder();
        }
    }, [id, user]);

    const checkUserOrder = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/cart/user/${user.email}`);
            setOrders(response.data);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

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
                itens: itens,
            });
            setOrderId(response.data.order);
            console.log(response.data.order);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const addInCart = async (product, quantity) => {
        const newItens = [...itens, { productid: product.id, quantity }];
        setItens(newItens);
        try {
            if (orders.order_state === 'cart' && orders.restaurant_name !== restaurant.name) {
                setOpenModal(true);
                setOrder(orders.find((order) => order.order_state == 'cart'));
                console.log(order);
                setItens(null);
                return false;
            }

            if (!orderId) {
                await createOrder();
            } else {
                await axios.put(`http://localhost:4000/cart/${orderId}`, {
                    userEmail: user.email,
                    restaurantID: id,
                    dateandhour: new Date(),
                    state: 'cart',
                    itens: itens,
                });
            }
        } catch (e) {
            console.log('Error in requisition', e);
        }
    };

    const finishOrder = async () => {
        try {
            await axios.patch(`http://localhost:4000/cart/state/${orderId}`, { state: 'preparing' });
            const order = await getOrder(orderId);
            navigation.navigate('DetailsOrders', { order: order });
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

    const closeModal = () => {
        setOpenModal(false);
    }

    const closeFinish = () => {
        setOpenFinish(false);
    }

    console.log(orders);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.margem}>
                    {restaurant ? (
                        <View>
                            <Image source={{ uri: restaurant.image }} style={styles.imgTopo} />
                            <Text style={styles.restaurante}>{restaurant.name}</Text>
                            <Text style={styles.subInfo1}>Horário de funcionamento: {restaurant.operation}</Text>
                        </View>
                    ) : (
                        <View style={[styles.container, styles.horizontal]}>
    
                        <ActivityIndicator size="large" color="#dc341d" style={[styles.container, styles.horizontal]} />
                        
                      </View>
                    )}
                </View>
                <View style={styles.cardContainerGeral}>
                    {products.products ? (
                        products.products.map((product) => (
                            <Products key={product.id} data={product} addInCart={addInCart} loggon={user} />
                        ))
                    ) : (
                        <ActivityIndicator size="large" color="#dc341d" style={[styles.container, styles.horizontal]} />
                    )}
                </View>
                {itens.length > 0 && (
                    <TouchableOpacity onPress={finishOrder}>
                        <Text>Finalizar pedido</Text>
                    </TouchableOpacity>
                )}
            </View>
            {
                openModal && <Modal isOpen={openModal} closeModal={closeModal} isOrder={true} data={order} />
            }
            {
                openFinish && <FinishOrder data={order} isPayment={false} finishOrder={finishOrder} closeFinish={closeFinish}/>
            }
        </ScrollView>
    );
}

export default Pgpratos;
