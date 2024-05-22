import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./style";
import listComentarios from "../../models/Comentarios/comentarios";
import { useNavigation } from "@react-navigation/native";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function Details({ route }) {

    const { data } = route.params;

    const navigation = useNavigation();

    const removeComent = () => {
        listComentarios.deleteComentario(data.id);
        navigation.navigate('Comentarios');
    }

    const editComent = () => {
        navigation.navigate('Comnetarios', { comentario: data, edit: true });
    }

    return (

        <View style={styles.container}>

            {/* quando estilizar, adicionar as tags necessarias, pois abaixo so vai ter como faz pra exibir os dados*/}
            <View style={styles.subContainer}>
                <Text style={styles.name}>Nome: {data.nome}</Text>
                <Text style={styles.coment}>Comentário: {data.comentario}</Text>
                <View style={styles.btnsContainer} >
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.edit1} onPress={editComent}>
                            <Text style={styles.edit2}><CiEdit /></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.excluir1} onPress={removeComent}>
                            <Text style={styles.excluir2}><MdDelete /></Text>
                        </TouchableOpacity>

                 
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.subTitle2} onPress={() => navigation.navigate('Comentarios')}>
                            <Text style={styles.subTitle2}>Voltar para a pagina inicail!</Text>
                        </TouchableOpacity>
        </View>
    );
}