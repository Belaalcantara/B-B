import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../userContext';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import axios from 'axios';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';

function Pgpratos({ route }) {
    const { id } = route.params;
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    const [restaurant, setRestaurant] = useState(null);
    const [orderId, setOrderId] = useState(null);

    const fetchRestaurant = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/restaurants/${id}`);
            setRestaurant(response.data);
        } catch (e) {
            console.log('Error in requisition', e);
            throw e;
        }
    }

    useEffect(() => {
        fetchRestaurant();
    }, [id]);

    const addInOrder = async() => {
        try {
            const response = await axios.post(`http://localhost:4000/cart/${user.email}`, { state: 'cart' });
            setOrderId(response.data);
        } catch(e) {
            console.log('Error in requisition' , e);
        }
    }

    const finishOrder = async() => {
        try {
            await axios.put(`http://localhost:4000/cart/${orderId}`, { state: 'preparing' });
            navigation.navigate('DetailsOrder', getOrder(orderId));
        } catch(e) {
            console.log('Error in requisition' , e);
        }
    }

    const getOrder = async(id) => {
        try {
            const response = await axios.get(`http://localhost:4000/cart/${id}`);
            return response.data
        } catch(e) {
            console.log('Error in requisition' , e);
        }
    }

    return (
        user ? (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.margem}>
                        <Image />
                        <Text style={styles.restaurante}>{restaurant.name}</Text>
                        <Text style={styles.subInfo1}>Horário de funcionamento: {restaurant.operation}</Text>
                    </View>
                    <View style={styles.cardContainerGeral}>
                        <Products/>
                    </View>
                </View>
            </ScrollView>
        ) : (
            <Text>NOT FOUND</Text>
        )
    );
}

export default Pgpratos;



/*Apenas uma pagia de pratos que sera padrão para todas as outras paginas de pratos de cada respectivo restaurante clicado,
aqui serao puxadas informacoes do banco de dados.*/