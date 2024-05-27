import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native-web';
import styles from './styles';

function Sorveterias() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../../../../assets/sorvete2.jpg')}
                    style={styles.imgTopo}
                />
                <Text style={styles.restaurante}>Sergel</Text>
                <Text style={styles.subInfo1}>Pedido minimo de R$30,00.</Text>

                <View style={styles.cardContainerGeral}>
                    <View style={styles.cardContainer}>
                        <Image
                            source={require('../../../../assets/logoSergel.png')}
                            style={styles.imagemCard}
                        />
                        <Text style={styles.nomePrato}> Pote 2L sorvete leitinho trufado.</Text>
                    </View>
                    <Text style={styles.infosPrato1}>

                        Não contem glútwm. Contem lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja
                    </Text>
                    <Text style={styles.preco}> R$53,90.</Text>


                </View>
            </View>
        </ScrollView>
    );
}

export default Sorveterias;
