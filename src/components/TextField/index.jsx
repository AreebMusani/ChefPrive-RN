import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TextField = ({label, isPassword, keyboardType, style, children, onChangeText}) => {
  const [isInputTextShow, setisInputTextShow] = useState(isPassword);
  const [text, setText] = useState('');

  const handleInputChange = (newText) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

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
          onChangeText={handleInputChange}
          value={text}
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
