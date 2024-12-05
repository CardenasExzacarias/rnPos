import React from 'react'
import ProductsView from '../views/ProductsView'
import ScannerView from '../views/ScannerView'
import { Button, StyleSheet, View } from 'react-native'
import { SQLiteProvider } from 'expo-sqlite';
import { createTables } from '../database/database';
import ChargeView from '../views/ChargeView';
import HomeView from '../views/HomeView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeView} />
                <Stack.Screen name="Products" component={ProductsView} />
                <Stack.Screen name="Scanner" component={ScannerView} />
                <Stack.Screen name="Charge" component={ChargeView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;

/*
        <ChargeView />
        <SQLiteProvider databaseName='user.db' onInit={createTables}>
            <ProductsView />
        </SQLiteProvider>
*/