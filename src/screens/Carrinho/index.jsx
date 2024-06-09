import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext";

export default function Carrinho() {
    const { user } = useContext(UserContext);

    const [order, setOrder] = useState(null);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetchOrder();
    }, [user]);

    useEffect(() => {
      fetchRestaurant();
    }, [order]);

    const fetchOrder = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/cart/state/${user.email}`);
            setOrder(response.data);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    }

    const fetchRestaurant = async() => {
      console.log(order.restaurantid);
      try {
        const response = await axios.get(`http://localhost:4000/restaurants/${order.restaurantid}`);
        setRestaurant(response.data);
      } catch(e) {
        console.log('Error in requisition', e);
      }
    }

    console.log(order);
    console.log(restaurant);

    return (
        <ScrollView>
            {
                restaurant ? (
                    <View style={styles.container}>
                        <Text style={styles.title}>Seu Carrinho</Text>
                        <View style={styles.item}>
                            <Image source={{ uri:restaurant.image }}/>
                            <View style={styles.texto}>
                                <Text>{order.useremail}</Text>
                                <Text>{order.restaurantid}</Text>
                                <Text >{restaurant.name}</Text>
                                <Text>{order.dateandhour}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutText}>Finalizar Compra</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <View style={styles.container2}>
                    <View style={styles.card}>
                       
                            <Text style={styles.titulo}>Você não possui nenhum pedido no carrinho.</Text>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                    <Text style={styles.infos}>Deseja fazer um pedido?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                )
            }
        </ScrollView>
    )
};