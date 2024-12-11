import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Animated, Text, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, value, onChange }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const translateY = useRef(new Animated.Value(0)).current; // Initial position

  const handleFocus = () => {
    Animated.timing(translateY, {
      toValue: -30,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setShowPlaceholder(false);
  };

  const handleBlur = () => {
    if (value === '') {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setShowPlaceholder(true);
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.label,
          {
            transform: [{ translateY }],
            opacity: translateY.interpolate({
              inputRange: [-20, 0],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        {placeholder}
      </Animated.Text>
      <TextInput
        style={styles.input}
        placeholder={showPlaceholder ? placeholder : ''}
        value={value}
        onChangeText={(input) => {
          onChange(input);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    paddingHorizontal: 7,
    fontSize: 14,
    marginBottom: -47,
    color: '#00000066',
    backgroundColor: '#f2f2f2',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 7,
  },
});
