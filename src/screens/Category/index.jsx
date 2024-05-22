import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import style from './styles';
import Cardapio from "../../components/DetalhesComidas";

export default function CardapioScreen() {
  return (
    <ScrollView>
      <View style={style.cardapio}>
  

      <Cardapio
  restaurante="Spoleto"
  subtitulo="Preço mínimo de 30 reais"
  subtitulo2="Café gelado"
  sobre="De energia e matar o calor, do jeito que você mais precisa de todas as formas que quiser, sendo: fraco, médio, forte e extra forte."
  preco="R$ 9,00"
>
  <Image 
    style={style.imageHeader}
    source={require('../../../assets/cheese.jpg')}
  />
</Cardapio>

      </View>
    </ScrollView>
  );
}


