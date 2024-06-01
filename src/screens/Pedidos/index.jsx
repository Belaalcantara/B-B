import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Modal from "../../components/Modal";
import { UserContext } from "../../userContext";

export default function Orders() {

    const { user } = useContext(UserContext);

    const [flag, setFlag] = useState(user);
    const [orders, setOrders] = useState();

    const [openModal, setOpenModal] = useState(false);

    const navigation = useNavigation();

    const fetchOrders = async () => {
        try {
            if (flag) {
                const response = await axios.get(`http://localhost:4000/cart/${user}`);
                setOrders(response.data);
            }
        } catch (e) {
            console.log('Error in requisition', e);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [flag]);

    const toLogin = () => {
        navigation.navigate('Login');
    }

    const closeModal = () => {
        setOpenModal(false);
    }
    
    const addAdress = () => {
        if(flag) {
            setOpenModal(true);
        } else {
            toLogin();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>pedidos</Text>
            <View style={styles.orders}>
                {
                    flag != null ? (
                        <View>
                            <Text>{orders.total}</Text>
                            <View style={styles.unique}>
                                <Image />
                                <View style={styles.content}>
                                    <Text>{orders.orders.restaurant_name}</Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.loggon}>
                            <View style={styles.info}>
                                <Text style={{fontSize:16, display: 'flex', justifyContent:'center', alignItems: 'center'}}>É preciso entrar com seu usuário para ver o histórico</Text>
                            </View>
                            <TouchableOpacity onPress={toLogin} style={styles.nav}>
                                <Text style={{ color: 'white', textTransform: 'uppercase', fontSize: 15 }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
                <View>
                    <TouchableOpacity onPress={addAdress} style={styles.address}>
                        <Text style={{textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold'}}>ADICIONAR LOCAL DE ENTREGA</Text>
                    </TouchableOpacity>
                </View>
                {
                    openModal && <Modal isOpen={openModal} closeModal={closeModal} isAvaliation={false}/>
                }
            </View>
        </View>
    );
}