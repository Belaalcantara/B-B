import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

export default function Carrinho({ route }) {
  const { order } = route.params;



    return (
        <ScrollView>
         { 
         order ? (
            <View style={styles.container}>
          <Text style={styles.title}>Seu Carrinho</Text>
          <View style={styles.item}>
          <Image style={styles.img}/> 
            <View style={styles.texto}>
            <Text>Item 1</Text>
            <Text>R$10,00</Text>
            </View>
          </View>
          <View style={styles.item}>
        <Image style={styles.img} /> 
          <View style={styles.texto}>
            <Text>Item 2</Text>
            <Text>R$15,00</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Finalizar Compra</Text>
          </TouchableOpacity>

        </View>
          ) : (
            null
          )
          }
        </ScrollView>
      )
    };