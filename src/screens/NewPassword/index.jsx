import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import styles from './style';
import {changePassword} from '../../utils/firebase';
import withAlert from '../../components/AlertBox/withAlert';

const NewPassword = ({navigation, showAlert}) => {
  const [isLoading, setisLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [showError, setshowError] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [currentPassword, setcurrentPassword] = useState('');

  // const clearAllFields = () => {
  //   setpassword('')
  //   setconfirmPassword('')
  //   setcurrentPassword('')
  // }

  // useEffect(() => {
  //   clearAllFields()
  // })

  const onSubmit = () => {
    if (password.trim() === '' || confirmPassword.trim() === '' || currentPassword.trim() === '')
      setshowError('*Please enter all fields');
    else if (password !== confirmPassword)
      setshowError('*Please enter same password.');
    else {
      setisLoading(true);
      // changePassword(currentPassword, password)
      //   .then(() => {
      //     console.log('Updated Successfully...');
      //     setisSuccess(true);
      //     setTimeout(() => {
      //       navigation.replace('Login');
      //       setisSuccess(false);
      //     }, 1000);
      //   })
      //   .catch(error => showAlert('Error', error.toString()));
      setisLoading(false);
      navigation.replace('Login')
    }
  };

  if (isSuccess) {
    return (
      <View style={styles.successContainer}>
        <Image
          style={styles.successImg}
          source={require('../../assets/images/success.png')}
        />
        <Text style={styles.successMsg}>
          Your password has been changed successfully
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>New Password</Text>
        <Text>Set your new password!</Text>
      </View>

      <TextField
        label={'Current Password'}
        isPassword={true}
        onChangeText={setcurrentPassword}
      />

      <TextField
        label={'Password'}
        isPassword={true}
        onChangeText={setpassword}
      />
      <TextField
        label={'Confirm Password'}
        isPassword={true}
        onChangeText={setconfirmPassword}
      />
      {showError && <Text style={styles.error}>{showError}</Text>}

      <Button text={'NEXT'} style={{marginTop: 20}} onPress={onSubmit}>
        {isLoading && <ActivityIndicator size={'large'} color={'#fff'} />}
      </Button>
    </View>
  );
};

export default withAlert(NewPassword);
