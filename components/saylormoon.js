import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {AntDesign }from '@expo/vector-icons';

export default function Saylormoon(){
  return (
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}>Sailor Moon</Text>
        <Text style={estilo.conceito}>Sailor Moon conta a história de Usagi Tsukino, uma garota normal e inocente de 14 anos — pelo menos, é isso que ela pensa — que um dia encontra Luna, uma gata falante que revela a identidade de Usagi como "Sailor Moon", uma guerreira mágica destinada a salvar a Terra das forças do mal. </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/saylormoon.JPG')}/>
      
        <View style={estilo.fundo}>
          <Text style={estilo.topicos}><Text style={estilo.negrito}>Autor:</Text> Naoko Takeuchi</Text>
          <Text style={estilo.topicos}><Text style={estilo.negrito}>Ano de lançamento:</Text> 1992</Text>
          <Text style={estilo.topicos}><Text style={estilo.negrito}>Episódios:</Text> 200</Text>
          <Text style={estilo.topicos}><Text style={estilo.negrito}>Direção:</Text> Junichi Sato</Text>
          <Text style={estilo.topicos}><Text style={estilo.negrito}>Estúdio:</Text> Toei Animation</Text>
          <Text style={estilo.topicos}><Text style={estilo.negrito}>Personagens principais:</Text> Usagi Tsukino (Sailor Moon), Ami Mizuno (Sailor Mercury), Rei Hino (Sailor Mars), Makoto Kino (Sailor Jupiter), Minako Aino (Sailor Venus) e Chibiusa (Sailor Chibi Moon).</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#d8f8e1'
  },

  conceito: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
    fontWeight: 'bold',
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
  },

  topicos:{
    fontSize: 20,
    marginLeft: 20,
    color: '#FFFFFF',
  },

  img:{
    width: 350,
    height: 250,
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
      marginrigth:20,
    }
})