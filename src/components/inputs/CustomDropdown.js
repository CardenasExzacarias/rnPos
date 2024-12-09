import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Picker } from '@react-native-picker/picker';

const CustomDropdown = ({ selectedValue, onValueChange, elementList, placeholder }) => {
    return (
        <View style={globalStyles.item}>
            <Text style={styles.label}>{placeholder}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    onValueChange(itemValue)
                }>
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
    label: {
        marginHorizontal: 4,
        color: '#00000066'
    }
});