import React from 'react';
import { View,Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../../components/DetalhesComidas/styles';
import Cardapio from "../../components/DetalhesComidas";

export default function cardapio() {
  return (
    <ScrollView>
      <Cardapio
            restaurante={"spolleto"}
          subtitulo={"preco minimo de 30 reais"}
      />
      
        <Cardapio 
         nome={"Café gelado"}
         sobre={"Um café gelado cremoso para adoçar o dia ao mesmo tempo que o enche de energia e matar o calor, do jeito que você mais precisa de todas as formas que quiser, sendo: fraco, médio, forte e extra forte."}
         preco={"R$ 9,00"}
        />

    </ScrollView>
  );
}


