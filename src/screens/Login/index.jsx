import { View, ImageBackground, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Popup from "../../components/Popup";
import Modal from "../../components/Modal";
import { UserContext } from "../../userContext";

export default function Login() {

    const navigation = useNavigation();
    const { user, setUser } = useContext(UserContext);

    //popup
    const [popup, setPopup] = useState(false);
    const [content, setContent] = useState('');

    //variables inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //modal
    const [openModal, setOpenModal] = useState(false);

    const fetchUser = async () => {
        if (email.length == 0 || password.length == 0) {
            setPopup(true);
            setContent('Complete os campos');
            setTimeout(() => {
                setPopup(false);
            }, 3000);
            return false;
        }

        try {
            const response = await axios.get(`http://localhost:4000/users/${email}`);
            const userDB = response.data;
            if (userDB.password == password) {
                setUser(userDB);
                navigation.navigate('Home');
            } else {
                setPopup(true);
                setContent('Erro! Senha incorreta');
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

    const addAdress = () => {
        setOpenModal(true);
    }
    
    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <View style={styles.container}>
            {
                user ? (
                    <View style={styles.logged}>
                        <Text style={{ textTransform: 'uppercase', color: 'white', fontSize: 30, fontWeight: 'bold' }}>{user.name}</Text>
                        <View style={styles.img}>
                            <Image source={require('../../../assets/bk.jpg')} style={styles.profileImage} />
                            <Text style={{ margin: 7, color: 'white' }}>email: {user.email}</Text>
                        </View>
                        <View style={styles.functions}>
                            <View style={styles.card}>
                                <TouchableOpacity onPress={addAdress}>
                                    <Text style={{ fontSize: 25 }}> ❯ ENDEREÇO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            openModal && <Modal isOpen={openModal} closeModal={closeModal} isAvaliation={false} />
                        }
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