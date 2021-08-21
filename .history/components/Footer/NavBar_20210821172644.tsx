import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function NavBar(){
  function goMainScreen(){
    this.props.navigation.navigate('DETAIL');
  }

    

  return (
    <>
      <Text>NavBar</Text>
      <Button onPress={() => {}}title="Press Me"/>
    </>
  );
}