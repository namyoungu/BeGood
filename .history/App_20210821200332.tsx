import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './routes/Login';
import NavBar from './components/Footer/NavBar';
import Main from './routes/Main';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="NavBar" component={NavBar}/>
        <Stack.Screen name="Login" component={Login} options={{ title: '로그인화면' }}/>
        <Stack.Screen name="Main" component={Main} options={{ title: 'Main' }}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
