import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { SignInWithEmailPassword, annonymousLogin, loginWithFacebook, loginWithGoogle } from '../../utils/firebase';
import { checkFormData } from '../../utils/helperFunctions';
import withAlert from '../../components/AlertBox/withAlert';
import Toast from 'react-native-toast-message';

const Login = ({navigation, showAlert}) => {
  // GoogleSignin.configure({
  //   webClientId: "938613023234-90g81s1sjram89q0s0483dbaienec716.apps.googleusercontent.com"
  // })
  const [isLoading, setisLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (fieldName, value) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const onLogin = async () => {
    try{
      setisLoading(true);
      if(checkFormData(formData)){
        const response = await SignInWithEmailPassword(formData.email, formData.password);
        console.log("RESPONSE ", response);
        Toast.show({
          type: 'success',
          text1: 'Login Successfully...'
        }); 
      }else{
        Toast.show({
          type: 'error',
          text1: 'Field should not be empty...'
        });    
        // showAlert('Error', 'Field should not be empty...')
      }
    }catch(error){
      showAlert('Error', error.toString())
    }finally{
      setisLoading(false);
    }
  }

  const onFbButton = async () => {
    try{
      const data = await loginWithFacebook();
      Toast.show({
        type: 'success',
        text1: 'Login Successfully...'
      });     
    }catch(error){
      showAlert('Error', error.toString())
      
    }
  }

  const onGoogleButton = async () => {
    try{
      const data = await loginWithGoogle();
      console.log(data);
      Toast.show({
        type: 'success',
        text1: 'Login Successfully...'
      }); 
    }catch(error){
      showAlert('Error', error.toString())
    }
  }

  const onGuest = async () => {
    try{
      const data = await annonymousLogin();
      Toast.show({
        type: 'success',
        text1: 'Login Successfully...'
      });    
    }catch(error){
      showAlert('Error', error.toString())
    }
  }
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.heading}>Log In</Text>
      <TextField 
          onChangeText={(value) => handleInputChange('email', value)}
          label={'Email'} />
      <TextField 
          onChangeText={(value) => handleInputChange('password', value)}
          label={'Password'} isPassword={true} />
      <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')} style={styles.forgetPassCon}>
        <Text style={styles.forgetPassText}>Forget Password?</Text>
      </TouchableOpacity>

      <Button 
        text={'LOG IN'} 
        onPress={onLogin}>
          {isLoading && <ActivityIndicator size={'large'} color={'#fff'} />}
      </Button>

      <View style={{flexDirection: 'row'}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.forgetPassText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onGuest}>
        <Text style={styles.guest}>Continue as guest</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.line}></View>
        <Text style={styles.lineInnerText}>continue with</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={onGoogleButton}>
          <Image source={require('../../assets/images/google-logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFbButton}>
          <Image source={require('../../assets/images/fb-logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/apple-logo.png')} />
        </TouchableOpacity>
      </View>
      {/* <AlertBox title={'Error'} msg={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia recusandae nisi, laborum maxime veritatis at hic perspiciatis corporis voluptatem doloribus eos quidem magnam, facere sit voluptates unde modi architecto.'} /> */}
    </ScrollView>
  );
};

export default withAlert(Login);
