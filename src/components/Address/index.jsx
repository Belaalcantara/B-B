import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../userContext";

const RegisterAddress = ({ onClose }) => {

    const { user } = useContext(UserContext);
    const email = user.email;

    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [oldNumber, setOldNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [oldState, setOldState] = useState('');

    const [data, setData] = useState(null);

    const fetchAddress = async () => {
        if (cep.length == 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                setStreet(response.data.logradouro);
                setNeighborhood(response.data.bairro);
                setCity(response.data.localidade);
                setOldState(response.data.uf);
            } catch (e) {
                console.log(error);
            }
        } else {
            return null;
        }
    }

    const addAddress = async() => {
        let number = Number(oldNumber);
        let state = oldState.toUpperCase();
        console.log(user.address);
        if(user.address == null) {
            const response = await axios.post(`http://localhost:4000/address`, { state, city, neighborhood, number, complement, cep, street, email });
            setData(response.data.message);
        } else {
            await axios.put(`http://localhost:4000/address/${user.address}`, { state, city, neighborhood, number, complement, cep, street, email });
            setData(response.data.message);
        }
        onClose();
    }

    useEffect(() => {
        fetchAddress();
    }, [cep]);

    return (
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>Coloque seu enderço!</Text>
            <View style={styles.address}>
                <Text style={styles.label}>CEP:</Text>
                <TextInput style={styles.inpt} value={cep} onChangeText={setCep} />
                <View style={styles.info}>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Rua:</Text>
                        <TextInput style={styles.inpt} value={street} onChangeText={setStreet} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Bairro:</Text>
                        <TextInput style={styles.inpt} value={neighborhood} onChangeText={setNeighborhood} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Cidade:</Text>
                        <TextInput style={styles.inpt} value={city} onChangeText={setCity} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Estado:</Text>
                        <TextInput style={styles.inpt} value={oldState} onChangeText={setOldState} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Número:</Text>
                        <TextInput style={styles.inpt} value={oldNumber} onChangeText={setOldNumber} keyboardType='numeric' />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Complemento:</Text>
                        <TextInput style={styles.inpt} value={complement} onChangeText={setComplement} />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={addAddress}>
                    <Text style={{fontSize: 20, color: 'white'}}>Adicionar endereço</Text>
                </TouchableOpacity>
                <Text>{data}</Text>
            </View>
        </View>
    );
}

export default RegisterAddress;