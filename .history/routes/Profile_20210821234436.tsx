import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

import NavBar from '../components/Footer/NavBar';
import Main from './Main';
import Home from './Home';
import {RootStackParamList} from '../components/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Profile(){
  const navigation = useNavigation<loginScreenProp>();

  return (
    <>
      <Text>LoginMain</Text>
      <Button
        title="LoginMain"
        onPress={() => navigation.navigate('Login')}
      />
    </>
  );
}