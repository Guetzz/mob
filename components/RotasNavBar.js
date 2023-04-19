 import react from 'react';
import {} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import DragonBall from './dragonball';
import OnePiece from './onepiece';
import Saylormoon from './saylormoon';

const Tab = createBottomTabNavigator();

export default function RotasNavBar(){
  return(
    <Tab.Navigator>
      <Tab.Screen 
      name="Dragon" 
      component={DragonBall} 
      options={{
        tabBarIcon:({color, size})=>(
        <MaterialIcons name="blur-circular" size={24} color="black" />
      ),
      }}
      />

      <Tab.Screen 
      name="One Piece" 
      component={OnePiece} 
      options={{
        tabBarIcon:({color, size})=>(
        <FontAwesome5 name="redhat" size={24} color="black" />
      ),
      }}
      />

      <Tab.Screen 
      name="Saylor Moon" 
      component={Saylormoon} 
      options={{
        tabBarIcon:({color, size})=>(
       <MaterialCommunityIcons name="teddy-bear" size={24} color="black" />
      ),
      }}
      />
    </Tab.Navigator>
  );
}
