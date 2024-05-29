import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import RegisterAddress from "../Address";

const Modal = ({ isOpen, isAvaliation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{fontSize:25, padding:5, color: 'white'}}> X </Text>
                    </TouchableOpacity>
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