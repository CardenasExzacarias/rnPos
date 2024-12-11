import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Picker } from '@react-native-picker/picker';

const CustomDropdown = ({ selectedValue, onValueChange, elementList, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{placeholder}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={itemValue => onValueChange(itemValue)}
            >
                {
                    elementList.map((value, index) => (
                        <Picker.Item key={index} label={value} value={value} />
                    ))
                }
            </Picker>
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    container: {
        marginLeft: -10,
        marginBottom: 15
    },
    label: {
        marginHorizontal: 15,
        color: '#00000066'
    }
});