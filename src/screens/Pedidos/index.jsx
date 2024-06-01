import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Modal from "../../components/Modal";
import { UserContext } from "../../userContext";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";

export default function Orders() {

    const { user } = useContext(UserContext);

    const [orders, setOrders] = useState(null);

    const [openModal, setOpenModal] = useState(false);

    const navigation = useNavigation();

    const fetchOrders = async () => {
        try {
            if (user) {
                const response = await axios.get(`http://localhost:4000/cart/${user.email}`);
                console.log(response);
                setOrders(response.data);
            }
        } catch (e) {
            console.log('Error in requisition', e);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [user]);

    const toLogin = () => {
        navigation.navigate('Login');
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    const addAdress = () => {
        if (user) {
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
                    orders != null ? (
                        <ScrollView horizontal={false}>
                            {
                                orders.orders.map((order) => (
                                    <Card data={order} key={order.id} />
                                ))
                            }
                        </ScrollView>
                    ) : (
                        <View style={styles.loggon}>
                            <View style={styles.info}>
                                <Text style={{ fontSize: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>É preciso entrar com seu usuário para ver o histórico</Text>
                            </View>
                            <TouchableOpacity onPress={toLogin} style={styles.nav}>
                                <Text style={{ color: 'white', textTransform: 'uppercase', fontSize: 15 }}>Entrar</Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={addAdress} style={styles.address}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }}>ADICIONAR LOCAL DE ENTREGA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
                {
                    openModal && <Modal isOpen={openModal} closeModal={closeModal} isAvaliation={false} />
                }
            </View>
        </View>
    );
}