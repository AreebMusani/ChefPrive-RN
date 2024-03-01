import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

const Navigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return unsubscribe;  
  }, []);

  const checkAuthStatus = () => {
    try{
      const user = auth().currentUser;        
      if(user){
        setIsAuthenticated(true)
      }else{
        setIsAuthenticated(false)
      }
    }catch(error){
      console.warn("Error while checking Auth Status: ", error);
    }finally{
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
