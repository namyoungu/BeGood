import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type Props = {
  navigation : any;
};

export default function NavBar({ navigation } : any}){
  function goMain(){
    navigation.navigate('DETAIL');
  }

    

  return (
    <>
      <Text>NavBar</Text>
      <Button onPress={() => goMain()}title="Press Me"/>
    </>
  );
}