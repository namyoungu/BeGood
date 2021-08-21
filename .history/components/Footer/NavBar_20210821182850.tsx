import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RenderMain from '../Main/RenderMain';


export default function NavBar({navigation : {navigate}}) {
  return (
    <Button onPress={() => navigate('Profile', { names: ['Brent', 'Satya', 'Michaś'] }) } title="Go to Brent's profile" />
  );
}