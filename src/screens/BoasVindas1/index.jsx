import { View, TouchableOpacity, Image} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

export default function BoasVindas1() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/boasvindas1.png")} resizeMode="cover" style={styles.image} />

            <TouchableOpacity onPress={() => navigation.navigate('BoasVindas2')}>
              <Image
                style={styles.imageButton}
                source={require("../../../assets/Icon seta.png")}
              />
            </TouchableOpacity>
        </View>
    )
}