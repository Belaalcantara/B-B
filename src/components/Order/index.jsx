import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';


function Orders({ data }) {

    const clear = async() => {
        //jaja faço
    }

    const continueBuy = async() => {
        //tbm
    }

    return (
        <ScrollView>
            <View style={styles.masterContainer}>
                
             <TouchableOpacity onPress={clear} style={styles.button}>
                    <Text style={styles.buttonText}>Limpar Pedido</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={continueBuy} style={styles.button}>
                    <Text style={styles.buttonText}>Continuar Comprando</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Orders;