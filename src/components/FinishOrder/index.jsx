import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import Payment from "../Payment";
import Orders from "../Order";
import { useEffect, useState } from "react";

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
                            <Payment finish={finishOrder}/>
                        ) : (
                            <Orders data={data} fncPayment={fncAlter}/>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

export default FinishOrder;