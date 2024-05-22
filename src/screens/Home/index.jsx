import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.blocoperfil}>
        <View style={styles.fotoinfo}>
          <Image
            source={require('../../../assets/user icon.png')}
            style={styles.imageperfil}
          />
          <View style={styles.infos}>
            <Text style={styles.boasvindas}>Seja bem-vindo(a), novo cliente!</Text>
            <Text style={styles.textocinza}>Já realizou o seu pedido de hoje?</Text>
          </View>
        </View>
        <View style={styles.infosperfil}>
          <Text style={styles.textonome}>nome</Text>
          <Text style={styles.textoemail}>email</Text>
        </View>
      </View>

      <Text style={styles.categorias}>Categorias</Text>

      <View style={styles.categorias1}>
        <Image
          source={require('../../../assets/Massas.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('../../../assets/Marmitex.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('../../../assets/Asiáticas.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.categorias1}>
        <Image
          source={require('../../../assets/Sorveterias.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('../../../assets/Pizzarias.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('../../../assets/Árabes.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.blocofome}>
        <Text style={styles.text}>Como está sua fome hoje?</Text>
        <View style={styles.carinhas}>
          <Image
            source={require('../../../assets/1.png')}
            style={styles.carinhaImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../../assets/2.png')}
            style={styles.carinhaImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../../assets/3.png')}
            style={styles.carinhaImage}
            resizeMode="cover"
          />
        </View>
      </View>

      <Image
        source={require('../../../assets/banner.png')}
        style={styles.banner}
        resizeMode="cover"
      />

      <Text style={styles.recomendadas}>Lojas mais recomendadas</Text>

      <View style={styles.lojas}>
        <View style={styles.lojadiv}>
          <Image
            source={require('../../../assets/bk.jpg')}
            style={styles.lojalogo}
            resizeMode="cover"
          />
          <Text style={styles.lojanome}>BK</Text>
        </View>
        <View style={styles.lojadiv}>
          <Image
            source={require('../../../assets/acai.png')}
            style={styles.lojalogo}
            resizeMode="cover"
          />
          <Text style={styles.lojanome}>Tô indo açaí</Text>
        </View>
        <View style={styles.lojadiv}>
          <Image
            source={require('../../../assets/mc.jpg')}
            style={styles.lojalogo}
            resizeMode="cover"
          />
          <Text style={styles.lojanome}>MC</Text>
        </View>
        <View style={styles.lojadiv}>
          <Image
            source={require('../../../assets/subway.jpg')}
            style={styles.lojalogo}
            resizeMode="cover"
          />
          <Text style={styles.lojanome}>Subway</Text>
        </View>
      </View>
    </ScrollView>
  );
}