import { View, Text, Image, ActivityIndicator } from "react-native";
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
            if(orderDB.data) {
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
    console.log(order)
    return (
        <View style={styles.container}>
            {
                order ? (
                    <View>
                        <Text style={styles.name}>Restaurante: {order.restaurant_name}</Text>
                        <Text style={styles.name}>ID do pedido: {order.order_idid}</Text>


                        <View style={styles.containerDetalhes}>
                            <Text style={styles.detalhes}>Detalhes do pedido: {order.products_details}</Text>
                            <Text style={styles.detalhes}>Data do pedido: {order.order_date}</Text>
                            <Text style={styles.detalhes}>Estado do pedido: {order.order_state}</Text>
                        </View>
                        <View style={styles.containerTotal}>
                            <Text style={styles.detalhes}>Total do pedido: {order.total_price}</Text>
                        </View>
                    </View>
                ) : (
                    <ActivityIndicator size="large" color="#dc341d" style={[styles.container, styles.horizontal]} />

                )
            }
        </View>
    );
}