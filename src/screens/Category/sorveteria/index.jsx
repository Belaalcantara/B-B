import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

function Sorveterias() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.margem}>
                <Image
                    source={require('../../../../assets/banner sergel.jpg')}
                    style={styles.imgTopo}
                />
                <Text style={styles.restaurante}>Sergel</Text>
                <Text style={styles.subInfo1}>Pedido minimo de R$30,00.</Text>
                </View>
                <View style={styles.cardContainerGeral}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cards}>
                        <Image
                            source={require('../../../../assets/sorvete2.jpg')}
                            style={styles.imagemCard}
                        />
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}>Pote 2L sorvete leitinho trufado.</Text>
                        <Text style={styles.precoPrato}> R$20,00</Text>
                        </View>
                        </View>
                        <Text style={styles.desc}>Descrição do Prato:</Text>
                        <Text style={styles.infosPrato1}>
                        Não contem glútem. Contém lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja.
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainerGeral}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cards}>
                        <Image
                            source={require('../../../../assets/sorvete2.jpg')}
                            style={styles.imagemCard}
                        />
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}>Pote de 1L de Morango.</Text>
                        <Text style={styles.precoPrato}> R$20,00</Text>
                        </View>
                        </View>
                        <Text style={styles.desc}>Descrição do Prato:</Text>
                        <Text style={styles.infosPrato1}>
                        Não contem glútem. Contém lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja.
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainerGeral}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cards}>
                        <Image
                            source={require('../../../../assets/sorvete2.jpg')}
                            style={styles.imagemCard}
                        />
                        <View style={styles.infos}>
                        <Text style={styles.nomePrato}> Pote 2L sorvete leitinho trufado.</Text>
                        <Text style={styles.precoPrato}> R$20,00</Text>
                        </View>
                        </View>
                        <Text style={styles.desc}>Descrição do Prato:</Text>
                        <Text style={styles.infosPrato1}>
                        Não contem glútem. Contém lactose. ALÉRGICOS contem leite e derivados, castanha de caju e derivados de soja.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Sorveterias;
