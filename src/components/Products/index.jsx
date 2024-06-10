import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Products = ({ data, addInCart, loggon }) => {
    const handleAddToCart = () => {
        addInCart(data, 1);
    };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cards}>
                <View style={styles.infos}>
                    <Image source={{ uri: data.image }} style={styles.imagemCard} />
                    <Text style={styles.nomePrato}>{data.name}</Text>
                </View>
            </View>
            <Text style={styles.precoPrato}>{data.price}</Text>
            <Text style={styles.desc}>{data.description}</Text>

            {loggon && (
                <TouchableOpacity onPress={handleAddToCart}>
                    <Text>Adicionar no carrinho</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Products;
