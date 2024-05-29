import { View, TextInput, Text } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

const RegisterAddress = () => {

    const [cep, setCep] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchAddress = async() => {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                setData(response.data);
            } catch(e) {
                console.log(error);
            }
        }
        fetchAddress();
    }, [cep]);

    return(
        <View>
            <Text>Coloque seu enderço!</Text>
            <View style={styles.address}>
                <TextInput value={cep} onChange={setCep}/>
            </View>
        </View>
    );
}

export default RegisterAddress;