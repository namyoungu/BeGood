import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavBar from '../Footer/NavBar';
import Main from '../../routes/Main';
import Join from '../../routes/Join';


export default function LoginMain({navigation} : any){
  console.log(navigation);
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