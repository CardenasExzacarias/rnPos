import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';
import GenericButton from '../components/GenericButton';
import { globalStyles } from '../styles/global';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    SellStack: undefined;
    InventoryStack: undefined;
    SuppliersStack: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
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
            <GenericButton
                onPress={() => navigation.navigate('SuppliersStack')}
                text={"Proveedores"}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
});