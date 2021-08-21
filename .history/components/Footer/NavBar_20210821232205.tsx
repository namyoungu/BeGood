import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../mainbottomTabParams';

import Profile from '../../routes/Profile';
import Main from '../../routes/Main';
import Calender from '../../routes/Calender';
import Home from '../../routes/Home';


const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export default function NavBar() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Calender" component={Calender} />
      </Tab.Navigator>
  );
}