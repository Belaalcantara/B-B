import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';

function FinalizarPedido() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Lógica para buscar os produtos do backend
        fetch('url_do_backend/produtos')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Erro ao buscar os produtos:', error));
    }, []);

    const registerUser = () => {
        // Lógica para registrar o usuário quando o botão é pressionado
    };

    return (
        <ScrollView>
            <View style={styles.masterContainer}>
               
                <View style={styles.container}>
                    {products.map(product => (
                        <View key={product.id} style={styles.subContainer}>
                            <Image style={styles.image} source={{ uri: product.image }} />
                            <Text>{product.name}</Text>
                            <Text>{product.description}</Text>
                            <Text>R${product.price.toFixed(2)}</Text>
                            <TouchableOpacity style={styles.entryBtn}>
                                <Text style={styles.entryText}>Adicionar ao Pedido</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <TouchableOpacity onPress={registerUser} style={styles.entryBtn}>
                    <Text style={{ color: 'white', textTransform: 'uppercase' }}>Pedir!</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

export default FinalizarPedido;