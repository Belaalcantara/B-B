import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../userContext';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import axios from 'axios';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';
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

    useEffect(() => {
        fetchRestaurant();
        getProducts(id);
        if (user) {
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

    const createOrder = async (itens) => {
        try {
            console.log('Criando novo pedido com itens:', itens);
            const response = await axios.post(`http://localhost:4000/cart`, {
                userEmail: user.email,
                restaurantID: id,
                dateandhour: new Date(),
                state: 'cart',
                itens: itens,
            });
            setOrderId(response.data.order);
            console.log('Pedido criado com ID:', response.data.order);
        } catch (e) {
            console.log('Erro ao criar pedido', e);
        }
    };

    const addInCart = async (product, quantity) => {
        const newItens = [...itens, { productid: product.id, quantity }];
    
        if (orders && orders.order_state === 'cart' && orders.restaurant_name !== restaurant.name) {
            setOpenModal(true);
            setOrder(orders.find((order) => order.order_state === 'cart'));
            console.log('Conflito de restaurante:', orders.restaurant_name);
            return false;
        }
    
        setItens(newItens); // Atualiza o estado de itens
    
        // Aguarda a atualização do estado de itens antes de fazer a requisição
        await new Promise((resolve) => setTimeout(resolve, 0));
    
        try {
            if (!orderId) {
                console.log('Nenhum pedido existente, criando novo pedido...');
                await createOrder(newItens); // Passa os novos itens para a função createOrder
            } else {
                console.log('Atualizando pedido existente...');
                await axios.put(`http://localhost:4000/cart/${orderId}`, {
                    userEmail: user.email,
                    restaurantID: id,
                    dateandhour: new Date(),
                    state: 'cart',
                    itens: newItens,
                });
            }
        } catch (e) {
            console.log('Erro na requisição', e);
        }
    };
    
    const finishOrder = async () => {
        try {
            await axios.patch(`http://localhost:4000/cart/state/${orderId}`, { state: 'preparing' });
            const order = await getOrder(orderId);
            console.log(order);
            navigation.navigate('DetailsOrders', { orderid: order.id });
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
            {openModal && <Modal isOpen={openModal} closeModal={closeModal} isOrder={true} data={order} />}
        </ScrollView>
    );
}

export default Pgpratos;
