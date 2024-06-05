import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


export default function Restaurantes({ route }) {
    const navigation = useNavigation();

    const { type } = route.params;
    const [restaurants, setRestaurants] = useState(null);

    console.log(restaurants);

    const fetchRestaurantByType = async () => {
        try {
            const response = await fetch(`http://localhost:4000/restaurants/type/${type}`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            
            const data = await response.json();
            console.log(data);
            setRestaurants(data);
        } catch (e) {
            console.log('Error in requisition', e);
            throw e;
        }
    }

    useEffect(() => {
        fetchRestaurantByType();
    }, [type])

    const goToRestaurant = (restaurant) => {
        navigation.navigate('Pgpratos', { id: restaurant });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    restaurants !== null ? (
                        restaurants.map((restaurant) => (
                            <TouchableOpacity style={styles.btn} onPress={() => goToRestaurant(restaurant.id)} key={restaurant.id}>
                                <View style={styles.card}>
                                    <View> 
                                        <Image source={{ uri: restaurant.image }} />
                                    <View style={styles.infos}></View>
                                   
                                        <Text style={styles.titulo}>{restaurant.name}</Text>
                                        <Text style={styles.texto}>{restaurant.operation}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        null
                    )
                }

            </View>
        </ScrollView>
    )

}
/*Apenas uma pagia de restaurantes que sera padrão para todas as outras paginas de restaurantes de cada respectivo restaurante clicado,
aqui serao puxadas informacoes do banco de dados.*/