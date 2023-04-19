import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DragonBall() {
  return (
    
    <View Style={estilo.container}>
    <ScrollView>
      <Text style={estilo.titulo}> Dragon Ball Z </Text>
      <Text style={estilo.conceito}>
        
       Dragon Ball Z, anime antigo que passa muito tempo na televisão aberta, apresenta Goku, sua família e amigos, num universo de vilões, onde existem alguns super-humanos e Goku faz parte deste, onde tem que derrotar os inimigos de forma incomum e extra-terrestres.

      </Text>
      <Image
        style={estilo.img}
        resizeMode={'contain'}
        source={require('../assets/Vegeta.jpg')}
      />
      
      <View style={estilo.fundo}>
      
        <Text style={estilo.topicos}>
        
  <Text style={estilo.negrito}>Autor:</Text> Akira Toriyama
</Text>
<Text style={estilo.topicos}>
  <Text style={estilo.negrito}>Ano de lançamento:</Text> 1989
</Text>
<Text style={estilo.topicos}>
  <Text style={estilo.negrito}>Episódios:</Text> 291
</Text>
<Text style={estilo.topicos}>
  <Text style={estilo.negrito}>Direção:</Text> Minoru Okazaki e Daisuke Nishio
</Text>
<Text style={estilo.topicos}>
  <Text style={estilo.negrito}>Estúdio:</Text> Toei Animation
</Text>
<Text style={estilo.topicos}>
  <Text style={estilo.negrito}>Personagens principais:</Text> Goku, Vegeta, Gohan, Piccolo, Trunks, Bulma, entre outros.
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
    backgroundColor: '#fdf9c4',
    
  },

  conceito: {
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
     
  },

  titulo: {
    marginTop: 30,
    marginBottoom: 20,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  subtitulo: {
    marginBottoom: 20,
    marginLeft: 20,
    fontSize: 20,
    
  },

  topicos: {
    fontSize: 18,
    marginLeft: 25,
    color: '#FFFFFF',
  },

  img: {
     width: 250,
    height: 350,
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: '#000',
   alignSelf: 'center',   
  },

  fundo: {
    backgroundColor: '#080605',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  negrito: {
  fontWeight: 'bold',
},
  icon: {marginTop:10,

    marginrigth: 20
  }
})