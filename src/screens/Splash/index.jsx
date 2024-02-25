import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}
      />
    </View>
  )
}

export default Splash
