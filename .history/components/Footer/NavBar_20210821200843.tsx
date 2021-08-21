import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../routes/Profile';
import Main from '../../routes/Main';
import Calender from '../../routes/Calender';


const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Profile" component={Profile} />
        
      </Tab.Navigator>
  );
}