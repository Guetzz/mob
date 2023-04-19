import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function OnePiece() {
  return (
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}>One Piece</Text>
        <Text style={estilo.conceito}>A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.</Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/onepiece.JPG')}/>
        <View style={estilo.fundo}>
          <Text style={estilo.subtitulo}>Informações</Text>
          <Text style={estilo.topicos}>
            <AntDesign name="user" size={20} color="#FFFFFF" style={estilo.icon}/> Autor: Eiichiro Oda
          </Text>
          <Text style={estilo.topicos}>
            <AntDesign name="calendar" size={20} color="#FFFFFF" style={estilo.icon}/> Ano de lançamento: 1997
          </Text>
          <Text style={estilo.topicos}>
            <AntDesign name="videocamera" size={20} color="#FFFFFF" style={estilo.icon}/> Episódios: 1000+
          </Text>
          <Text style={estilo.topicos}>
            <AntDesign name="setting" size={20} color="#FFFFFF" style={estilo.icon}/> Direção: Kōnosuke Uda, Junji Shimizu, Munehisa Sakai, entre outros
          </Text>
          <Text style={estilo.topicos}>
            <AntDesign name="star" size={20} color="#FFFFFF" style={estilo.icon}/> Estúdio: Toei Animation
          </Text>
          <Text style={estilo.topicos}>
            <AntDesign name="team" size={20} color="#FFFFFF" style={estilo.icon}/> Personagens principais: Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony Tony Chopper, Nico Robin, Franky, Brook, entre outros.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcb7af'
  },
  conceito: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
  },
  titulo: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subtitulo: {
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 20,
    color: '#FFFFFF',
  },
  topicos: {
    fontSize: 20,
    marginLeft: 20,
    color: '#FFFFFF',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  img:{
    width: 350,
    height: 300,
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: '#fff',
   alignSelf: 'center', 
    },
    
    fundo:{
      backgroundColor: '#080605',
      borderRadius:20,
      marginHorizontal:20
    },
    icon:{
      marginRigh: 10
    }
})