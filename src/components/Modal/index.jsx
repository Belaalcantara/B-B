import { useState } from "react";
import { View } from "react-native";
import styles from "./styles";

const Modal = ({ isOpen, onClose, data, isAvaliation }) => {
    return(
        <View style={styles.container}>
            {
                isAvaliation ? (
                    <View>
                        {/*Avaliação*/}
                    </View>
                ) : (
                    <View>
                        {/*Endereço*/}
                    </View>
                )
            }
        </View>
    );
}

export default Modal;