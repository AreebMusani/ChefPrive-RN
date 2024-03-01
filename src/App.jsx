import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './navigator';
import Toast, { BaseToast } from 'react-native-toast-message';

const App = () => {
  const toastConfig = {
    zIndex: 99999999999999,
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green'}}
        contentContainerStyle={{backgroundColor: '#777'}}
        text1Style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff',
        }}
      />
    ),

    error: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'red'}}
        contentContainerStyle={{backgroundColor: '#777'}}
        text1Style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff',
        }}
      />
    ),
  };

  return (
    <React.Fragment>
      <Navigator />
      <Toast config={toastConfig} />
    </React.Fragment>
  );
};

export default App;
