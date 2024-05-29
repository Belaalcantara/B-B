
import { View, ImageBackground, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Popup from "../../components/Popup";

export default function Login() {

    const navigation = useNavigation();

    //popup
    const [popup, setPopup] = useState(false);
    const [content, setContent] = useState('');

    //variables inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //user
    const [user, setUser] = useState();

    const fetchUser = async () => {
        if(email.length == 0 || password.length == 0) {
            setPopup(true);
            setContent('Complete os campos');
            setTimeout(() => {
                setPopup(false);
            }, 3000);
            return false;
        } 

        try {
            const response = await axios.get(`http://localhost:4000/users/${email}`);
            const user = response.data;
            if (!user.email) {
                if (password == user.password) {
                    navigation.navigate('Home');
                    setUser(user);
                } else {
                    setPopup(true);
                    setContent('Erro! Senha incorreta');
                }
            }
        } catch (e) {
            console.log('Erro interno de servidor', e);
            setPopup(true);
            setContent('Usuário não encontrado');
        }

        setTimeout(() => {
            setPopup(false);
        }, 3000)
    }

    const goToRegister = () => {
        navigation.navigate('Register');
    }


    return (
        <View style={styles.container}>
            {
                user ? (
                    <View style={styles.logged}>
                        
                    </View>
                ) : (
                    <View>
                        <ImageBackground source={require('../../../assets/White and Red Minimalist Promotion Burger Food Instagram Story (1) (1).png')} resizeMode="cover" style={styles.background} />
                        <View style={styles.form}>
                            <Text style={styles.title}>Login:</Text>
                            <View style={styles.content}>
                                <View style={styles.inputfield}>
                                    <Text style={styles.label}>Email:</Text>
                                    <TextInput style={styles.inpt}
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                    />
                                </View>
                                <View style={styles.inputfield}>
                                    <Text style={styles.label}>Senha:</Text>
                                    <TextInput style={styles.inpt}
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                </View>
                                <TouchableOpacity onPress={fetchUser} style={styles.entryBtn}>
                                    <Text style={styles.btn}>Entrar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={goToRegister} style={styles.nav}>
                                    <Text style={styles.bluebtn}>Ainda não é cadastrado?</Text>
                                </TouchableOpacity>
                                {
                                    popup && <Popup type={content} />
                                }
                            </View>
                        </View>
                    </View>
                )
            }
        </View>
    );
}