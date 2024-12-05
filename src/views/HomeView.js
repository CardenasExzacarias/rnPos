import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';
import GenericButton from '../components/GenericButton';
import { globalStyles } from '../styles/global';

const HomeView = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <GenericButton
                onPress={() => navigation.navigate('Scanner')}
                text={"Escanear"}
            />
        </View>
    );
};

export default HomeView;

const styles = StyleSheet.create({
});