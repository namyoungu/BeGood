import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function NavBar(){
  return (
    <>
      <Text>NavBar</Text>
      <Button
  onPress={() => {
    alert('You tapped the button!');
  }}
  title="Press Me"
/>
    </>
  );
}