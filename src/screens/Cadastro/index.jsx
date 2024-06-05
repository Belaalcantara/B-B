import { View, Text, ImageBackground, TouchableOpacity, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import Popup from "../../components/Popup";
import styles from './styles';

export default function Register() {
    const navigation = useNavigation();

    //Popup
    const [popup, setPopup] = useState(false);
    const [content, setContent] = useState('');

    //variable inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');

    //register user
    const registerUser = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/users/${email}`);
            let user = response.data;
            if(user) {
                setPopup(true);
                setContent('Email já cadastrado');
            } else {
                const verifyCPF = await axios.get(`http://localhost:4000/users/cpf/${cpf}`);
                if(verifyCPF.data) {
                    setPopup(true);
                    setContent('CPF já cadatrado');
                } else {
                    await axios.post(`http://localhost:4000/users`, { name, email, cpf, telephone, password });
                    navigation.navigate('Login');
                }
            }
        
            setTimeout(() => {
                setPopup(false);
            }, 3000);
        } catch(e) {
            console.log('Erro interno de servidor', e);
        }
    }

    return (
        <View style={styles.container}>
                        <ImageBackground source={require('../../../assets/White and Red Minimalist Promotion Burger Food Instagram Story (1) (1).png')} resizeMode="cover" style={styles.background} />

            <View style={styles.form}>
                <Text style={styles.title}>Cadastre-se:</Text>
                <View style={styles.content}>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>Nome:</Text>
                        <TextInput style={styles.inpt}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput style={styles.inpt}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>CPF:</Text>
                        <TextInput style={styles.inpt}
                            value={cpf}
                            onChangeText={setCpf}
                        />
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>Telefone:</Text>
                        <TextInput style={styles.inpt}
                            value={telephone}
                            onChangeText={setTelephone}
                        />
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.label}>Senha:</Text>
                        <TextInput style={styles.inpt}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity onPress={registerUser} style={styles.entryBtn}>
                        <Text style={{ color: 'white', textTransform: 'uppercase' }}>Cadastrar</Text>
                    </TouchableOpacity>
                    {
                        popup && <Popup type={content} />
                    }
                </View>
            </View>
        </View>
    );
}