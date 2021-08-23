import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

import NavBar from '../Footer/NavBar';
import Main from '../../routes/Main';
import {RootStackParamList} from '../RootStackParams';
import Home from '../../routes/Home';


type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function LoginMain(){
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={styles.container}>
      <Text>LoginMain</Text>
      <Button
        title="LoginMain"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Join"
        onPress={() => navigation.navigate('Join')}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    marginTop: 100
  },
  
});

