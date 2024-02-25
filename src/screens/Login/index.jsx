import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

const Login = ({navigation}) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.heading}>Log In</Text>
      <TextField label={'Email'} />
      <TextField label={'Password'} isPassword={true} />



      <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')} style={styles.forgetPassCon}>
        <Text style={styles.forgetPassText}>Forget Password?</Text>
      </TouchableOpacity>

      <Button text={'LOG IN'} />

      <View style={{flexDirection: 'row'}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.forgetPassText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.guest}>Continue as guest</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.line}></View>
        <Text style={styles.lineInnerText}>continue with</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/google-logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/fb-logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/apple-logo.png')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
