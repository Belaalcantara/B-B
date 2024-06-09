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
            <Text></Text>
            <Text></Text>
            </View>
          </View>
          <View style={styles.item}>
        <Image style={styles.img} /> 
          <View style={styles.texto}>
            <Text></Text>
            <Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Finalizar Compra</Text>
          </TouchableOpacity>

        </View>
          ) : (
            <View>
            <Text>Você não possui nenhum pedido no carrinho.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textbnt}>Deseja fazer um pedido?</Text>
            </TouchableOpacity>
            </View>
          )
          }
        </ScrollView>
      )
    };