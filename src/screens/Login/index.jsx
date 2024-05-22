import { View, ImageBackground } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { ImageBackground } from "react-native";

export default function Login({ route }) {
    const { isAlreadyRegistered } = route.params;

    const [register, setRegister] = useState(isAlreadyRegistered);

    

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/White and Red Minimalist Promotion Burger Food Instagram Story (1) (1).png')} resizeMode="cover"/>
        </View>
    );
}