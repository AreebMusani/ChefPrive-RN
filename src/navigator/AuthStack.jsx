import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import VerificationOTP from '../screens/VerificationOTP';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Signup' component={Signup} />
    <Stack.Screen name='forgotPassword' component={ForgotPassword} />
    <Stack.Screen name='NewPassword' component={NewPassword} />
    <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
   </Stack.Navigator>
  )
}

export default AuthStack;