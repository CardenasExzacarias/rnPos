import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';

const HomeView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate('Scanner')}
                style={({ pressed }) => [{ backgroundColor: pressed ? 'lightgray' : 'white', }, styles.button,]}
            >
                <Text style={styles.text}>Escanear</Text>
            </Pressable>
        </View>
    );
};

export default HomeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: 16,
    },
});