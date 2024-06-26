import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {ActivityIndicator} from 'react-native';


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
                                    <View style={styles.infos}>
                                    <Image source={{ uri: restaurant.image }} style={styles.img} />
                                        <Text style={styles.titulo}>{restaurant.name}</Text>
                                    </View>

                                    <Text style={styles.texto}>{restaurant.operation}</Text>

                                   
                                       

                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View style={[styles.container, styles.horizontal]}>
    
                        <ActivityIndicator size="large" color="#dc341d"   style={[styles.container, styles.horizontal]} />
                        
                      </View>
                    )
                }

            </View>
        </ScrollView>
    )

}