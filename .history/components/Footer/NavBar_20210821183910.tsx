import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RenderMain from '../Main/RenderMain';
import Main from '../../routes/Main';


const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main} />
        
      </Tab.Navigator>
  );
}