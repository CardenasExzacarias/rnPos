import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Button, Modal, StyleSheet } from 'react-native'

const CustomModal = ({ children, isVisible, setIsVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true} // to make the background dimmed
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)} // Android back button handler
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {children}
          <Button
            title="Close Modal"
            onPress={() => setIsVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});