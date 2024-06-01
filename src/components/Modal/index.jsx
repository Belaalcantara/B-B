import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import RegisterAddress from "../Address";

const Modal = ({ isOpen, closeModal, isAvaliation }) => {
    if(!isOpen) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.btn} onPress={closeModal}>
                            <Text style={{ fontSize: 25, padding: 5, color: 'white' }}> X </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        isAvaliation ? (
                            <View style={styles.header}>
                                {/*Avaliação*/}
                            </View>
                        ) : (
                            <View style={styles.header}>
                                <RegisterAddress />
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

export default Modal;