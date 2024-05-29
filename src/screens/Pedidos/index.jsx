import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Modal from "../../components/Modal";

export default function Orders({ route }) {

    const { logged, user } = route.params;

    const [flag, setFlag] = useState(logged);
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
    
    const addAdress = () => {
        if(true) {
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
                    flag ? (
                        <View>
                            <Text>{orders.total || null}</Text>
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
                    openModal && <Modal isOpen={openModal} isAvaliation={false}/>
                }
            </View>
        </View>
    );
}