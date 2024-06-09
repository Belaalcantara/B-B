import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext";

export default function Carrinho() {
    const { user } = useContext(UserContext);

    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrder();
    }, [user]);

    const fetchOrder = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/cart/state/${user.email}`);
            setOrder(response.data);
        } catch (e) {
            console.log('Error in requisition', e);
        }
    }

    console.log(order);

    return (
        <ScrollView>
            {
                order ? (
                    <View style={styles.container}>
                        <Text style={styles.title}>Seu Carrinho</Text>
                        <View style={styles.item}>
                            <Image style={styles.img}>{order.image}</Image>
                            <View style={styles.texto}>
                                <Text>{order.useremail}</Text>
                                <Text >{order.restaurant}</Text>
                                <Text>{order.dateandhour}</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.img}>{order.image}</Image>
                            <View style={styles.texto}>
                                <Text>{order.useremail}</Text>
                                <Text>{order.restaurant}</Text>
                                <Text>{order.dateandhour}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutText}>Finalizar Compra</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <View>
                        <Text>Você não possui nenhum pedido no carrinho.</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.textbnt}>Deseja fazer um pedido?</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </ScrollView>
    )
};