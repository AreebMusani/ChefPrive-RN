import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TextField = ({label, isPassword, keyboardType, style, children}) => {
  const [isInputTextShow, setisInputTextShow] = useState(isPassword);
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.fieldContainer}>
        {children ? children :
        <> 
        <TextInput
          style={styles.textInput}
          keyboardType={keyboardType || 'default'}
          secureTextEntry={isInputTextShow}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setisInputTextShow(!isInputTextShow)}>
            <FontAwesome  name={isInputTextShow ? "eye-slash" : "eye"} size={20} color="grey" />
          </TouchableOpacity>
        )}
        </>}
      </View>
      
    </View>
  );
};

export default TextField;
