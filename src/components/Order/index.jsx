import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';


function Orders({ data }) {
    const navigation = useNavigation();

    const clear = async () => {
        await axios.delete(`http://localhost:4000/cart/${data.order_id}`);
        navigation.navigate('Home');
    }

    return (
        <ScrollView>
            <View style={styles.masterContainer}>
                <View>
                    <Image source={{ uri: data.image }} />
                    <Text>{data.restaurant_name}</Text>
                    <Text>{data.poducts_details}</Text>
                    <Text>{data.order_state}</Text>
                    <Text>{data.total_price}</Text>
                </View>
                <TouchableOpacity onPress={clear} style={styles.button}>
                    <Text style={styles.buttonText}>Limpar Pedido</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Orders;