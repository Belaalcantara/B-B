import { View } from "react-native";
import styles from "../FinishOrder/styles";

const Payment = ({ finish }) => {
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Número do Cartão"
            />
            <TextInput
                style={styles.input}
                placeholder="Nome do Titular do Cartão"
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Expiração"
            />
            <TextInput
                style={styles.input}
                placeholder="CVV"
            />

            <TouchableOpacity onPress={() => navigation.navigate('FinishOrder')}>
                <Text style={styles.textbnt}>Registrar Cartão</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Payment;