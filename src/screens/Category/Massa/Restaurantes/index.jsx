import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import styles from './styles';

export default function Restaurantes() {
    return (
        <ScrollView>
            <View style={style.container}>
                <View style={styles.box}>
                <Image
                    style={[style.image, { width: 80, height: 80 }]}
                    source={require('../../../../../assets/logoSpoleto.png')}
                />
                <Text style={StyleSheet.titulo}>Spoleto</Text>
                <Text style={StyleSheet.texto}>O Spoleto é uma rede de restaurantes brasileira de fast casual inspirada na culinária italiana</Text>
                </View>
            </View>
        </ScrollView>
    );
}