import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../styles/global';

const CustomInput = ({ placeholder, value, onChange }) => {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <View style={globalStyles.item}>
      {showLabel ? <Text style={styles.label}>{placeholder}</Text> : ''}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(input) => {
          onChange(input);
          input !== '' ? setShowLabel(true) : setShowLabel(false);
        }}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  label: {
    marginHorizontal: 4,
    color: '#00000066'
  }
});