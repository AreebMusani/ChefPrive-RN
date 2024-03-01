import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Picker} from '@react-native-picker/picker'
import { SignUpWithEmailPassword } from '../../utils/firebase';
import { checkFormData } from '../../utils/helperFunctions';
import withAlert from '../../components/AlertBox/withAlert';
import Toast from 'react-native-toast-message'

const Signup = ({navigation, showAlert}) => {
  const [isLoading, setisLoading] = useState(false)
const [listOfFindUs, setListOfFindUs] = useState([
    {label: 'Facebook', value: 'Facebook'},
    {label: 'Instagram', value: 'Instagram'},
    {label: 'Friend', value: 'Friend'},
    {label: 'Other', value: 'Other'},
  ]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
    selectedFind: '',
    toggleCheckBox: false
  });

  const handleInputChange = (fieldName, value) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const onSignUp = async () => {
    try{
      setisLoading(true);
      if(checkFormData(formData)){
        const response = await SignUpWithEmailPassword(formData.email, formData.password, formData);
        console.log("RESPONSE ", response);
        Toast.show({
          type: 'success',
          text1: 'Register Successfully...'
        }); 
      }else{
        Toast.show({
          type: 'error',
          text1: 'Field should not be empty...'
        }); 
      }
    }catch(error){
      showAlert('Error', error.toString())
    }finally{
      setisLoading(false);
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.heading}>Sign Up</Text>
      {/* <View style={styles.formContainer}> */}
      <View style={styles.nameContainer}>
        <TextField 
          onChangeText={(value) => handleInputChange('firstName', value)}
          style={{width: '48%'}} label={'First Name'} />
        <TextField 
          onChangeText={(value) => handleInputChange('lastName', value)}
          style={{width: '48%'}} label={'Last Name'} />
      </View>
      <TextField 
          onChangeText={(value) => handleInputChange('email', value)}
        
        keyboardType={'email-address'} label={'Email'} />
      <TextField 
          onChangeText={(value) => handleInputChange('password', value)}

      label={'Password'} isPassword={true} />
      <TextField 
          onChangeText={(value) => handleInputChange('contactNumber', value)}
          keyboardType={'number-pad'} label={'Contact Number'} />
      <TextField 
        style={{position: "relative"}} label={'How did you find us?'}>
        <Picker
        itemStyle={{color: "pink"}}
            mode='dropdown'
          style={{width: "100%", paddingHorizontal: 0, marginHorizontal: 0}}
          selectedValue={formData.selectedFind}
          onValueChange={(itemValue, itemIndex) =>
            handleInputChange('selectedFind', itemValue)
          }>
            <Picker.Item enabled={false} label="Select" value="" />
            {listOfFindUs.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
        </Picker>
        {/* <DropDownPicker
          style={{
            borderColor: '#000',
            borderWidth: 0,
            backgroundColor: 'transparent',
          }}
          zIndex={100000}
          zIndexInverse={100000}
          open={isPickerOpen}
          value={value}
          items={listOfFindUs}
          setOpen={setIsPickerOpen}
          setValue={setValue}
          setItems={setListOfFindUs}
        /> */}
        {/* <TouchableOpacity style={{flexDirection: "row", alignItems: "center", paddingVertical: 15}}>
          <Text style={{flexGrow: 1}}>Select</Text>
          <FontAwesome name="arrow-down" size={20} color={'#000'} />
        </TouchableOpacity>
        <View style={{width: "100%", height: 100, backgroundColor: "pink", position: "absolute", top: 0, marginTop: 50, zIndex: 50000}}></View> */}
      </TextField>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
          marginVertical: 10,
          zIndex: 500000,
        }}>
        <CheckBox
          value={formData.toggleCheckBox}
          onValueChange={newValue => handleInputChange('toggleCheckBox', newValue)}
          tintColors={{true: '#FF9E2C', false: '#FF9E2C'}}
        />
        <Text style={{color: '#000', letterSpacing: 0.5, flex: 1}}>
          Keep me updated with special offers, exciting products and news
        </Text>
      </View>

      <Button 
        text={'SIGN UP'} 
        onPress={onSignUp}
        style={{width: "100%", zIndex: 500000}}>
          {isLoading && <ActivityIndicator size={'large'} color={'#fff'} />}
      </Button>

      <View style={{flexDirection: 'row'}}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.forgetPassText}>Log In</Text>
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

export default withAlert(Signup);
