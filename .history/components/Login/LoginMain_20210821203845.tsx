import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavBar from '../Footer/NavBar';



export default function LoginMain({navigation} : any){
  return (
    <>
      <Text>LoginMain</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </>
  );
}