import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './styles';
function Cardapio({ imagemHeader, imagemCard, subtitulo, subtitulo2, sobre, preco, restaurante }) {
    return (

        <View style={style.container}>
            <View style={style.cardapio}>
                <Image style={style.imagemHeader}>{imagemCard}</Image>
                <Text style={style.restaurante}>{restaurante}</Text>
                <Text style={style.subtitulo}>{subtitulo}</Text>
                </View >
                <View style={style. cardCardapio}> 
                <Image style={style.imagemCard}>{imagemCard}</Image>
                <Text style={style.subtitulo2}>{subtitulo2}</Text>
                <Text style={style.sobre}>{sobre}</Text>
                <Text style={style.preco}>{preco}</Text>
</View>
           
        </View>
    )
}
export default Cardapio;