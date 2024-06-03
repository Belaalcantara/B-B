import { View, Text, Image } from "react-native";

const Products = ({ data }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cards}>
                <Image />
                <View style={styles.infos}>
                    <Text style={styles.nomePrato}></Text>
                    <Text style={styles.precoPrato}> </Text>
                </View>
            </View>
            <Text style={styles.desc}></Text>
            <Text style={styles.infosPrato1}>
            </Text>
        </View>
    );
}

export default Products