import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function NavBar(){
  function goMainScreen(){
    navigation.navigate('DETAIL');
  }

    

  return (
    <>
      <Text>NavBar</Text>
      <Button onPress={() => {}}title="Press Me"/>
    </>
  );
}