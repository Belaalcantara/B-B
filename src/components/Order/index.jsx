import axios from "axios";
import { View, Text,  } from "react-native";

const Orders = ({ data }) => {

    const deleteOrder = async() => {
        try {
            await axios.delete(`http://localhost:4000/cart/${data.id}`);
        } catch(e) {
            console.log('Error in requisition', e);
        }
    }

    return (
        <View>
            {/* colocar informações do pedido pelo data (como data.quantity, consolar pra saber oq traz) e botão q executa função acima, fazer estilo tb */}
        </View>
    );
}

export default Orders;