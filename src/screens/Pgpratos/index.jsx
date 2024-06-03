import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

function Pgpratos() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.margem}>
                <Image/>
                <Text style={styles.restaurante}>Sergel</Text>
                <Text style={styles.subInfo1}>Pedido minimo de R$30,00.</Text>
                </View>
                <View style={styles.cardContainerGeral}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cards}>
                        <Image/>
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}></Text>
                        <Text style={styles.precoPrato}> </Text>
                        </View>
                        </View>
                        <Text style={styles.desc}></Text>
                        <Text style={styles.infosPrato1}>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Pgpratos;



/*Apenas uma pagia de pratos que sera padrão para todas as outras paginas de pratos de cada respectivo restaurante clicado,
aqui serao puxadas informacoes do banco de dados.*/