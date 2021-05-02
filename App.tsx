import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationSplashScreen from './components/authentication/splashScreen';
import AuthenticationLoginScreen from './components/authentication/loginScreen';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={AuthenticationSplashScreen}
          options={{
            headerShown: false
          }}

         ></Stack.Screen>

        <Stack.Screen
          name='Login'
          component={AuthenticationLoginScreen}
         ></Stack.Screen>



      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({

});
