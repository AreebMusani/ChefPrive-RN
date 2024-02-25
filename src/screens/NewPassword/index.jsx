import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './style'

const NewPassword = ({navigation}) => {
    const [isSuccess, setisSuccess] = useState(false)
    const [showError, setshowError] = useState(false);
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');


    const onSubmit = () => {
        if(password !== confirmPassword)
          setshowError(true);
        else
          setisSuccess(true)
          setTimeout(() => {
            navigation.replace('Login');
            setisSuccess(false)
          }, 1000);
    }

    if(isSuccess){
      return(
        <View style={styles.successContainer}>
          <Image 
            style={styles.successImg}
            source={require('../../assets/images/success.png')}
          />
          <Text style={styles.successMsg}>Your password has been changed successfully</Text>
        </View>
      )
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.heading}>New Password</Text>
      <Text>Set your new password!</Text>
      </View>

      <TextField 
        label={'Password'}
        isPassword={true}
      />
      <TextField 
        label={'Confirm Password'}
        isPassword={true}
      />
      {showError && <Text style={styles.error}>*Please enter same password.</Text>}
      <Button 
        text={'NEXT'}
        style={{marginTop: 20}}
        onPress={onSubmit}
      />
    </View>
  )
}

export default NewPassword