import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Payment from "../Payment";
import { useState } from "react";

const FinishOrder = ({ data, isPayment, finishOrder, closeFinish }) => {
    const [alterForPayment, setAlterForPayment] = useState(isPayment);

    const fncAlter = () => {
        setAlterForPayment(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.btn} onPress={closeFinish}>
                            <Text style={{ fontSize: 25, padding: 5, color: 'white' }}> X </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        alterForPayment ? (
                            <View style={styles.header}>
                                <Payment finish={finishOrder} />
                            </View>
                        ) : (
                            <View>
                                {/* COLOCAR HTML DE EXIBIR DADOS DO PEDIDO (utilizar data.id, etc conforme com oq o back traz) */}
                                <Text>Detalhes do Pedido: {data && JSON.stringify(data)}</Text>
                                <TouchableOpacity onPress={fncAlter}>
                                    <Text>Finalizar pedido</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

export default FinishOrder;
