import { View, Text, Image } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Orders() {
    const [flag, setFlag] = useState(false);

    return (
        <View style={styles.container}>
            <Text>PEDIDOS</Text>
            <View style={styles.orders}>
                {
                    flag ? (
                        <View style={styles.unique}>
                            <Image />
                            <View style={styles.content}>

                            </View>
                        </View>
                    ) : (
                        <View style={styles.loggon}>

                        </View>
                    )
                }
            </View>
        </View>
    );
}