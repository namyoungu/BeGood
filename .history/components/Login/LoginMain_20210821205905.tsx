import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavBar from '../Footer/NavBar';
import Main from '../../routes/Main';
import Join from '../RootStackParamList';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export default function LoginMain(){

  return (
    <>
      <Text>LoginMain</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate(Main)}
      />
      <Button
        title="Join"
        onPress={() => navigation.navigate(Join)}
      />
    </>
  );
}