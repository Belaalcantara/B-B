import { View, Text, Image } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailsOrders({ route }) {
    const { orderid } = route.params;

    const [order, setOrder] = useState(null);

    const fetchOrder = async() => {
        try {
            const orderDB = await axios.get(`http://localhost:4000/cart/${orderid}`);
            setOrder(orderDB);
        } catch(e) {
            console.log('Error in requisition', e);
        }
    }

    useEffect(() => {
        fetchOrder();
    }, []);

    const deleteOrder = async() => {
        try {
            await axios.delete(`http://localhost:4000/cart/${orderid}`);
        } catch(e) {
            console.log('Error in requisition', e);
        }
    }

    return(
        <View style={styles.container}>

        </View>
    );
}