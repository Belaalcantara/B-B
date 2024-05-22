
import { View, ImageBackground, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login({ route }) {

    const navigation = useNavigation();

    //variables inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/White and Red Minimalist Promotion Burger Food Instagram Story (1) (1).png')} resizeMode="cover" style={styles.background}/>
            <View style={styles.form}>
                <Text style={styles.title}>Faça seu login!</Text>
                <View style={styles.content}>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>Senha:</Text>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity onPress={navigation.navigate('Home')} style={styles.entryBtn}>
                        <Text style={{color:'white', textTransform: 'uppercase'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}