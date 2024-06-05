import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

export default function BoasVindas3() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/boasvindas3.png")} resizeMode="cover" style={styles.image} />
            
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Image
                    style={styles.imageButton}
                    source={require("../../../assets/Icon seta.png")}
                />
            </TouchableOpacity>
        </View>
    );
}
