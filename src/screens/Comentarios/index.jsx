import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";
import styles from "./styles";
import listComentarios from "../../models/Comentarios/comentarios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function Comentarios({ route }) {

    let { comentario, edit } = route.params;
    
    const navigation = useNavigation();
    const [nome, setNome] = useState([]);
    const [comentarios, setComentarios] = useState([]);

    const clearInputs = () => {
        setNome('');
        setComentarios('');
    }
    
    return (
        <ScrollView>

            <View style={styles.container}>
                <Image source={require("../../../assets/images/fundo.jpeg")} style={{ width: "60vw", height: "20vh", marginBottom: 15, marginTop: 2 }} />
                <View style={styles.forms}>
                    <Text style={styles.titulo}>Comentários</Text>
                    <Text style={styles.titulo}>Nome</Text>
                    
                    <View style={styles.inputField}>
                        <TextInput
                            value={nome}
                            onChangeText={setNome}
                            placeholder="Nome"
                        />
                        <Feather
                            name="home"
                            size={24}
                            color={"#000"}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <TextInput
                            value={comentarios}
                            onChangeText={setComentarios}
                            placeholder="Comentario"
                        />
                        <Feather
                            name="home"
                            size={24}
                            color={"#000"}
                        />
                    </View>


                </View>
            </View>
        </ScrollView>
    );
}