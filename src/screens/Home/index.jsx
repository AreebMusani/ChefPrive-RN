import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Button from '../../components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import auth from '@react-native-firebase/auth'

const Home = () => {

  const onLogout = () => {
    auth().signOut()
    .then(() => console.log('User signed out!'));  
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20}}>
        Welcome to the Home Screen!
      </Text>
      <FontAwesome name="user" size={120} color={'#777'} />
      {/* <View style={styles.item}>
        <Text style={styles.label}>Label:</Text>
        <Text style={styles.value}>Name</Text>
      </View> */}
      <Text style={{fontSize: 20, color: "#000", marginBottom: 20, fontWeight: "bold"}}>
        {auth().currentUser.email || "Annonymous"}
      </Text>
      <Button text={'LOGOUT'} onPress={onLogout} />
    </View>
  );
};

export default Home;
