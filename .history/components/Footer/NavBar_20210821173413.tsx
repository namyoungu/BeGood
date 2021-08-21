import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function NavBar({ navigation : any}){
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