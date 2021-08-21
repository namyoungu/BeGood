import React from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavBar from '../components/Footer/NavBar';

import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from '../MainBottomTabParams';


type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

export default function Main(){
  

  return (
    <Text>asdasd</Text>
  );
}