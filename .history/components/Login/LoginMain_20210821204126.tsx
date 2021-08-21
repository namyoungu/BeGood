import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavBar from '../Footer/NavBar';
import Main from '../../routes/Main';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

export default function LoginMain({navigation} : any){
  return (
    <>
      <Text>LoginMain</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </>
  );
}