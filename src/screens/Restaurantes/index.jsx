import { Text, View, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-web";


export default function RestaurantesPizza() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image/>
                    <View style={styles.infos}>
                    <Text style={styles.titulo}></Text>
                    <Text style={styles.texto}></Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )

}
/*Apenas uma pagia de restaurantes que sera padrão para todas as outras paginas de restaurantes de cada respectivo restaurante clicado,
aqui serao puxadas informacoes do banco de dados.*/