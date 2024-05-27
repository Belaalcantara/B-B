import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Orders({ route }) {

    const { logged, user } = route.params;

    const [flag, setFlag] = useState(logged);
    const [orders, setOrders] = useState();

    const navigation = useNavigation();

    const fetchOrders = async () => {
        try {
            if (flag) {
                const response = await axios.get(`http://localhost:4000/cart/${user}`);
                setOrders(response.data);
            }
        } catch (e) {
            console.log('Error in requisition', e);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [flag]);

    return (
        <View style={styles.container}>
            <Text>PEDIDOS</Text>
            <View style={styles.orders}>
                {
                    flag ? (
                        <View>
                            <Text>{orders.total || null}</Text>
                            <View style={styles.unique}>
                                <Image />
                                <View style={styles.content}>
                                    <Text>{orders.orders.restaurant_name}</Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.loggon}>
                            <View>
                                <Text>É preciso entrar com seu usuário para ver o histórico</Text>
                            </View>
                            <TouchableOpacity onPress={navigation.navigate('Login')} style={styles.nav}>
                                <Text style={{ color: 'white' }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    );
}