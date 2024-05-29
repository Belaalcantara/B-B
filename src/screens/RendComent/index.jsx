import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./style";
import listComentarios from "../../models/Comentarios/comentarios";
import { useNavigation } from "@react-navigation/native";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function RendComent() {

    //const { novoComentario } = route.params;
    //console.log('coment',novoComentario);

    const navigation = useNavigation();

    const removeComent = () => {
        listComentarios.deleteComentario(data.id);
        navigation.navigate('Comentarios');
    }

    const editComent = () => {
        navigation.navigate('Comentarios', { comentario: novoComentario, edit: true });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* quando estilizar, adicionar as tags necessarias, pois abaixo so vai ter como faz pra exibir os dados*/}
                <View style={styles.subContainer}>
                    <Text style={styles.name}>Nome:</Text>
                    <Text style={styles.coment}>Comentário: </Text>
                    <View style={styles.btnsContainer} >
                        <View style={styles.btns}>
                            <TouchableOpacity style={styles.edit1} >
                                <Text style={styles.edit2} onPress={editComent}><CiEdit />Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.excluir1} >
                                <Text style={styles.excluir2} onPress={removeComent}><MdDelete />Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.subTitle2} onPress={() => navigation.navigate('Comentarios')}>
                    <Text style={styles.subTitle2}>Voltar para a pagina inicio!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
