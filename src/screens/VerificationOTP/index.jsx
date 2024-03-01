import {Image, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import styles from './style';
import {
  CodeField,
  Cursor,
  MaskSymbol,
  isLastFilledCell,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import withAlert from '../../components/AlertBox/withAlert';

const CELL_COUNT = 4;

const VerificationOTP = ({navigation, showAlert}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    // if (symbol) {
    //   textChild = '\u2B24';
    // } else if (isFocused) {
    //   textChild = <Cursor />;
    // }
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol={String.fromCharCode(0x2b24)}
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  const onVerification = () => {
    if(value.length === CELL_COUNT){
        navigation.navigate('NewPassword')
    }else{
      showAlert("Error", "Please enter OTP")
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.mailImg}
        source={require('../../assets/images/mailReceived.png')}
      />
      <Text style={styles.successMsg}>
        Code has been sent to registered email mike.smith@gmail.com
      </Text>
      <Text style={styles.digitMsg}>Please enter 4 digit code</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Didn't receive code? </Text>
        <TouchableOpacity>
          <Text style={styles.forgetPassText}>Resend</Text>
        </TouchableOpacity>
      </View>
      <Button
        text={'VERIFY'}
        style={{marginTop: 20}}
        onPress={onVerification}
      />
    </View>
  );
};

export default withAlert(VerificationOTP);
