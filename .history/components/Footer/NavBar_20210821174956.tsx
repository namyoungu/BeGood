import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


type Props = {
  navigation : any;
};

export default function NavBar({ navigation } : any){
  function goMain(){
    navigation.navigate('Main');
  }

    

  return (
    <>
      <Button onPress={() => goMain()}title="NavBar"/>
    </>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}