import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Button = ({text, style, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container, style]}>
        {children ? children : 
        <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default Button
