import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Products = ({ data, addInCart, loggon }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cards}>
                <Image source={{ uri: data.image }} />
                <View style={styles.infos}>
                    <Text style={styles.nomePrato}>{data.name}</Text>
                    <Text style={styles.precoPrato}>{data.price}</Text>
                </View>
            </View>
            <Text style={styles.desc}>{data.description}</Text>
            {
                loggon ? (
                    <TouchableOpacity onPress={addInCart}>
                        <Text>Adicionar no carrinho</Text>
                    </TouchableOpacity>
                ) :
                    (
                        null
                    )
            }
        </View>
    );
}

export default Products