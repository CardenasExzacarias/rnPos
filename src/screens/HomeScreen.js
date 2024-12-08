import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';
import GenericButton from '../components/GenericButton';
import { globalStyles } from '../styles/global';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <GenericButton
                onPress={() => navigation.navigate('SellStack')}
                text={"Escanear"}
            />
            <GenericButton
                onPress={() => navigation.navigate('InventoryStack')}
                text={"Inventario"}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
});