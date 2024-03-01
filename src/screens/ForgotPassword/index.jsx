import { Alert, StyleSheet, Text, ActivityIndicator, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './style'
import { sendPasswordResetEmail } from '../../utils/firebase'
import emailjs from '@emailjs/browser';

const ForgotPassword = ({navigation}) => {
  const [email, setemail] = useState('');
  const [isLoading, setisLoading] = useState(false);


  const sendOTP = async () => {
    try{
      setisLoading(true);
      // const response = await sendPasswordResetEmail(email);
      const templateParams = {
        from_name: 'ChefPrive',
        to_name: email,
        message: "your OTP code is 1234",
        reply_to: "areebmusani0@gmail.com"
      };
      
      emailjs
        .send('service_iqv0srj', 'template_bn21vz7', templateParams, {
          publicKey: 'S3T-0a1lfJkNHwx-g',
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          },
        );
      console.log(response);
    }catch(error){
      showAlert("Error", error.message)
    }finally{
      setisLoading(false);
    }
  }

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
        onChangeText={setemail}
      />
      <Button 
        text={'NEXT'}
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('VerificationOTP')}>
        {/* onPress={sendOTP}> */}
        {isLoading && <ActivityIndicator size={'large'} color={'#fff'} />}
    </Button>
    </View>
  )
}

export default ForgotPassword