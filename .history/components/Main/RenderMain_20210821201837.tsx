import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export default function RenderMain(){
  return (
    <>
      <Text>RenderMain</Text>
    </>
  );
}

const HomeStack = createNativeStackNavigator();

export default function RenderMain() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}