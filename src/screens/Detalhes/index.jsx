import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userContext";

export default function DetailsOrders({ route }) {
    const { orderid } = route.params;
    console.log(orderid);

    const { user } = useContext(UserContext);
    const [order, setOrder] = useState(null);
    
    const fetchOrder = async () => {
        try {
            const orderDB = await axios.get(`http://localhost:4000/cart/user/${user.email}`);
            if (orderDB.data) {
                let order = orderDB.data.orders.find((order) => order.order_id == orderid);
                setOrder(order);
            }
        } catch (e) {
            console.log('Error in requisition', e);
        }
    }

    useEffect(() => {
        fetchOrder();
    }, [orderid]);

    console.log(order);

    const verifyState = (state) => {
        if (state == 'preparing') {
            return 'preparando'
        } else if (state == 'cart') {
            return 'carrinho'
        } else if (state == 'delievering') {
            return 'entregando'
        } else {
            return 'entregue'
        }
    }

    return (
        <View style={styles.container}>
            {order ? (
                <View style={styles.card}>
                    <View style={styles.margem}>
                        <Text style={styles.name}>Restaurante: {order.restaurant_name}</Text>
                    </View>
                    <View style={styles.containerDetalhes}>
                        <Text style={styles.detalhes}>Data do pedido: {order.order_date.split('-').join('/')}</Text>
                        <Text style={styles.detalhes}>Estado do pedido: {verifyState(order.order_state)}</Text>
                    </View>
                    <View style={styles.containerTotal}>
                        <Text style={styles.id}>ID do pedido: {order.order_id}</Text>
                        <Text style={styles.detalhes}>Total do pedido: {order.total_price}</Text>
                    </View>
                </View>
            ) : (
                <ActivityIndicator size="large" color="#dc341d" style={styles.horizontal} />
            )}
        </View>
    );
}