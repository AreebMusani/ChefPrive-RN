import React, { useState } from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AlertBox = ({title, msg, hideAlert, isVisible}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      // style={{padding: 100, backgroundColor: '#fff'}}
      visible={isVisible}
      onRequestClose={() => {
        hideAlert()
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.ModalHead}>{title}</Text>
          <View style={styles.ModalContent}>
            <Text style={styles.ModalMsg}>
              {msg} 
            </Text>
          </View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => hideAlert()}>
            <FontAwesome name="close" size={18} color={'#000'} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertBox;
