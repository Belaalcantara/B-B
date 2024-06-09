import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import axios from "axios";


const carouselItems = [
  { title: 'Massas', image: require('../../../assets/Massas.png'), type: 'Massa' },
  { title: 'Sorveterias', image: require('../../../assets/Sorveterias.png'), type: 'Sorvete' },
  { title: 'Asiáticas', image: require('../../../assets/Asiáticas.png'), type: 'Sushi' },
  { title: 'Fastfood', image: require('../../../assets/fastfood.png'), type: 'FastFood' },
  { title: 'Marmitex', image: require('../../../assets/Marmitex.png'), type: 'Marmita' },
  { title: 'Pizzarias', image: require('../../../assets/Pizzarias.png'), type: 'Pizza' }
];

export default function Home() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const { width: viewportWidth } = Dimensions.get('window');

  const [restaurant, setRestaurant] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, [restaurant]);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/restaurants/name/${restaurant}`);
      setData(response.data);
    } catch (e) {
      console.log('Error in requisition', e);
    }
  }
  
  const goToPgpratos = (id) => {
    navigation.navigate('Pgpratos', { id: id });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurantes', { type: item.type })}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.blocoperfil}>
        <View style={styles.fotoinfo}>
          <Image
            source={require('../../../assets/user icon.png')}
            style={styles.imageperfil}
          />
          <View style={styles.infos}>
            <Text style={styles.boasvindas}>{user ? `Seja bem-vindo(a), ${user.name}` : 'Seja bem-vindo(a), novo cliente!'}</Text>
            <Text style={styles.textocinza}>Já realizou o seu pedido de hoje?</Text>
          </View>
        </View>
        <View style={styles.infosperfil}>
          <Text style={styles.textonome}>{user && user.name}</Text>
          <Text style={styles.textoemail}>{user && user.email}</Text>
        </View>
      </View>
      <Text
                style={styles.input}
                placeholder="Pesquisar Restaurante"
            />
      <Text style={styles.categorias}>Categorias</Text>

      <View style={styles.categorias1}>
        <View>
          <TextInput
            value={restaurant}
            onChangeText={setRestaurant}
            style={styles.input}
            placeholder="Pesquisar Restaurante"
          />
          <View style={styles.nav}>
            {
              data.map((restaurant) => {
                <TouchableOpacity onPress={() => goToPgpratos(restaurant.id)}>
                  <Image source={{ uri: restaurant.image }} style={{ width: 30, height: 30 }} />
                  <Text>{restaurant.name}</Text>
                </TouchableOpacity>
              })
            }
          </View>
        </View>
        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={100}
          layout={'default'}
          activeSlideAlignment="start"
          activeSlideOffset={"start"}
        />
      </View>
      <View style={styles.blocofome}>
        <Text style={styles.text}>Como está sua fome hoje?</Text>
        <View style={styles.carinhas}>
          <TouchableOpacity onPress={() => navigation.navigate('Sorveterias')}>
            <Image
              source={require('../../../assets/1.png')}
              style={styles.carinhaImage}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Fastfood')}>
            <Image
              source={require('../../../assets/2.png')}
              style={styles.carinhaImage}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Massas')}>
            <Image
              source={require('../../../assets/3.png')}
              style={styles.carinhaImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SobreNos')}>
        <Image
          source={require('../../../assets/banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Text style={styles.recomendadas}>Lojas mais recomendadas</Text>

      <View style={styles.lojas}>
        <View style={styles.lojadiv}>
          <TouchableOpacity onPress={() => navigation.navigate('BK')}>
            <Image
              source={require('../../../assets/bk.jpg')}
              style={styles.lojalogo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.lojanome}>BK</Text>
        </View>
        <View style={styles.lojadiv}>
          <TouchableOpacity onPress={() => navigation.navigate('Acai')}>
            <Image
              source={require('../../../assets/acai.png')}
              style={styles.lojalogo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.lojanome}>Tô indo açaí</Text>
        </View>
        <View style={styles.lojadiv}>
          <TouchableOpacity onPress={() => navigation.navigate('MC')}>
            <Image
              source={require('../../../assets/mc.jpg')}
              style={styles.lojalogo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.lojanome}>MC</Text>
        </View>
        <View style={styles.lojadiv}>
          <TouchableOpacity onPress={() => navigation.navigate('Subway')}>
            <Image
              source={require('../../../assets/subway.jpg')}
              style={styles.lojalogo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.lojanome}>Subway</Text>
        </View>
      </View>
    </ScrollView>
  );
}
