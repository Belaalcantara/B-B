import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import RegisterAddress from "../Address";
import Orders from "../Order";

const Modal = ({ isOpen, closeModal, isOrder, data }) => {
    if(!isOpen) {
        return null;
    }

    if(!isOrder) {
        data = null;
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
                        isOrder ? (
                            <View style={styles.header}>
                                <Orders data={data}/>
                            </View>
                        ) : (
                            <View style={styles.header}>
                                <RegisterAddress onClose={closeModal} />
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

export default Modal;