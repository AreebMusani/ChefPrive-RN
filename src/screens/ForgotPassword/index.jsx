import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './style'

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name='long-arrow-left' color='#000' size={20} />
        </TouchableOpacity>
        <Text style={styles.heading}>Forgot Password</Text>
      </View>
      <TextField 
        label={'Email'}
      />
      <Button 
        text={'NEXT'}
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('VerificationOTP')}
      />
    </View>
  )
}

export default ForgotPassword