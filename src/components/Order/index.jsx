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
                <Text style={styles.titulo}>FINALIZAR PEDIDO.</Text>
                <View style={styles.container}>
                    {products.map(product => (
                        <View key={product.id} style={styles.subContainer}>
                            <Image style={styles.image} source={{ uri: product.image }} />
                            <Text>{product.name}</Text>
                            <Text>{product.description}</Text>
                            <Text>R${product.price}</Text>
                            <TouchableOpacity style={styles.entryBtn}>
                                <Text style={styles.entryText}>Adicionar ao Pedido</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <TouchableOpacity onPress={registerUser} style={styles.entryBtn}>
                    <Text style={styles.entryBtn}>Pedir!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Orders;