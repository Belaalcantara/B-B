import { Text, View, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-web";


export default function RestaurantesPizza() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={require('../../../../assets/logoPizzariaCastello.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.infos}>
                    <Text style={styles.titulo}> Pizzaria Castello</Text>
                    <Text style={styles.texto}>Um espaço rústico, aconchegante para reunir sua família e amigos.</Text>
                    </View>

                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../../../../assets/logoPizzariaMaremonti.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.infos}>
                    <Text style={styles.titulo}> Pizzaria Maremonti</Text>
                    <Text style={styles.texto}>No menu estão pratos tradicionais italianos, e suas versões cantineiras paulistanas.</Text>
                    </View>

                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../../../../assets/logoPizzariaSerata.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.infos}>
                    <Text style={styles.titulo}> Pizzaria Serata</Text>
                    <Text style={styles.texto}> A serata pizza bar nasceu para trazer até você deliciosos sabores de pizzas especiais.</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )

}