import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

import NavBar from '../components/Footer/NavBar';
import Main from './Main';
import Home from './Home';
import {RootStackParamList} from '../component/RootStackParams';


type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function Profile(){
  const navigation = useNavigation<mainScreenProp>();

  return (
    <>
      <Text>LoginMain</Text>
      <Button
        title="LoginMain"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Join"
        onPress={() => navigation.navigate('Join')}
      />
    </>
  );
}