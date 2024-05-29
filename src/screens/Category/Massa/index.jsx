import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native-web';
import styles from './styles';

function Massas() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../../../../assets/logoSergel.png')}
                    style={styles.imgTopo}
                />
                <Text style={styles.restaurante}>Spoletto</Text>
                <Text style={styles.subInfo1}>Pedido minimo de R$30,00.</Text>

                <View style={styles.cardContainerGeral}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cards}>
                        <Image
                            source={require('../../../../assets/sorvete2.jpg')}
                            style={styles.imagemCard}
                        />
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}> Spaghetti Carbonara.</Text>
                        <Text style={styles.precoPrato}> R$20,00</Text>
                        </View>
                        </View>
                        <Text style={styles.infosPrato1}>

                            Não contem glútwm. Contem lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja
                        </Text>

                        <View style={styles.cards}>
                        <Image
                            source={require('../../../../assets/sorvete2.jpg')}
                            style={styles.imagemCard}
                        />
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}> Penne Caprese.</Text>
                        <Text style={styles.precoPrato}> R$20,00</Text>
                        </View>
                        </View>
                        <Text style={styles.infosPrato1}>

                            Não contem glútwm. Contem lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja
                        </Text>

                        <View style={styles.cards}>
                        <Image
                            source={require('../../../../assets/sorvete2.jpg')}
                            style={styles.imagemCard}
                        />
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}> Massa Bolognesa Clássico.</Text>
                        <Text style={styles.precoPrato}> R$20,00</Text>
                        </View>
                        </View>
                        <Text style={styles.infosPrato1}>

                            Não contem glútwm. Contem lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja
                        </Text>
                    </View>

                    <Text style={styles.preco}> R$53,90.</Text>


                </View>
            </View>
        </ScrollView>
    );
}

export default Massas;
