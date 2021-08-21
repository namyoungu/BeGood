import React from 'react';
import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavBar from '../components/Footer/NavBar';
import { useNavigation } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../components/RootStackParams';
import {BottomTabBar, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from '../components/MainBottomTabParams';


type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Calender'>
>;

export default function Main(){
  const navigation = useNavigation<HomeScreenProp>();

  const Tab = BottomTabBar();

  return (
    <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Calender" component={Calender} />
        
      </Tab.Navigator>

  );
}