import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";
import styles from "./style";
import listComentarios from "../../models/Comentarios/comentarios.js";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Coment from "../../models/Comentarios/comentario.js";

export default function Comentarios({ route }) {

    let { comentario, edit } = route.params;

    console.log("Testee", comentario);

    const navigation = useNavigation();
    const [isUpdate, setIsUpdate] = useState(edit);
    console.log(isUpdate);


    const [nome, setNome] = useState([]);
    const [comentarios, setComentarios] = useState([]);

    const [novoComentario, setNovoComentario] = useState()

    const clearInputs = () => {
        setNome('');
        setComentarios('');
    }

    useEffect(() => {
        if (edit) {
            setNome(comentario.nome);
            setComentarios(comentario.comentarios)
            //editar
            setIsUpdate(true);
        } else {
            clearInputs();
        }
    }, [comentario, edit]);

    const handleComent = () => {
        if (isUpdate) {
            listComentarios.putComentario(comentario.id, nome, comentarios);
            console.log(listComentarios.getComentarioById(comentario.id));
            clearInputs();
        } else {
            const comentario = new Coment(nome, comentarios);
            setNovoComentario(comentario)
            listComentarios.postComentario(comentario);
            clearInputs();
        }
        navigation.navigate('RendComent');
    }


    return (
        <ScrollView>
                <View style={styles.container}>
                    <View style={styles.forms}>
                        <Text style={styles.titulo}>Faça um comentário</Text>

                        <View style={styles.inputField}>
                            <TextInput
                                value={nome}
                                onChangeText={setNome}
                                placeholder="Nome"
                            />
                            <Feather
                                name="user"
                                size={24}
                                color={"#000"}
                            />
                        </View>

                        <View style={styles.inputField}>
                            <TextInput
                                value={comentarios}
                                onChangeText={setComentarios}
                                placeholder="Comentário"
                            />
                            <Feather
                                name="message-circle"
                                size={24}
                                color={"#000"}
                            />
                        </View>

                        <View style={styles.button} >
                            <View style={styles.handle}>
                                <TouchableOpacity onPress={() => handleComent()}>
                                    <Text style={styles.textButton}>{isUpdate ? 'Atualizar' : 'Postar'}</Text>
                                </TouchableOpacity>
                                {isUpdate && (
                                    <TouchableOpacity style={styles.button2} onPress={clearInputs}>
                                        <Text style={styles.textButton2}>Cancelar Edição</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
        </ScrollView>
    );
}