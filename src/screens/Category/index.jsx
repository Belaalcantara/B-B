import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import style from './styles';
import Cardapio from "../../components/DetalhesComidas";

export default function CardapioScreen() {
  return (
    <ScrollView>

      <View style={style.cardapio}>
        <Image
          style={[style.imageHeader, { width: 400, height: 188 }]}
          source={require('../../../assets/spoleto-.webp')}
        />
      </View>
      <View style={style.container}>
        <View style={style.cardCardapio}>

          <Cardapio
            imagemCard={require('../../../assets/spaghetti1.webp')}
            restaurante="Spoleto"
            subtitulo="Preço mínimo de 30 reais"
            subtitulo2="Spaghetti"
            preco="R$ 9,00"
            sobre=" fraco, médio, forte e extra forte."
          />
        </View>
        

      </View>
    </ScrollView>
  );
}
