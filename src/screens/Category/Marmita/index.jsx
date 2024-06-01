import { Text, View, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-web";


export default function RestaurantesMarmita() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={require('../../../../assets/images/logoSabor1.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.infos}>
                        <Text style={styles.titulo}>Sabor Imperial</Text>
                        <Text style={styles.texto}>Um espaço aconchegante, e com menor taxa de entrega.</Text>
                    </View>

                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../../../../assets/images/logoFast.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.infos}>
                        <Text style={styles.titulo}>FASTNFIT</Text>
                        <Text style={styles.texto}>No menu estão pratos FIT para o seu dia a dia.</Text>
                    </View>

                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../../../../assets/images/logoZe.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.infos}>
                        <Text style={styles.titulo}>Marmitas do Zé</Text>
                        <Text style={styles.texto}> Marmitas do zé é um lugar tradicional, e com o envio mais rapido.</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )

}
