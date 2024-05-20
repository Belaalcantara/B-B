import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Orders() {
    return (
        <View style={styles.container}>
            <Text>PEDIDOS</Text>
            <View style={styles.orders}>
                <View style={styles.unique}>
                    <Image/>
                    <View style={styles.content}>

                    </View>
                </View>
            </View>
        </View>
    );
}