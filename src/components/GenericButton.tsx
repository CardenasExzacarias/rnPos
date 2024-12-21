import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native';

interface GenericButtonProps {
    text: string;
    onPress: () => void;
}

const GenericButton: React.FC<GenericButtonProps> = ({ text, onPress }) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => [{ backgroundColor: pressed ? 'lightgray' : 'white', }, styles.button,]}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default GenericButton;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
});