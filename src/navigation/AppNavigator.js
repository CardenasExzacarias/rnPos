import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from 'expo-sqlite';
import { initDatabase } from '../database/database';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen'
import SaleNavigator from './SaleNavigator';
import ScannerScreen from '../screens/ScanScreen';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => (
    <SQLiteProvider databaseName='pos.db' onInit={initDatabase}>
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Home">
                <AppStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={{ title: 'Productos' }}
                />
                <AppStack.Screen
                    name="Scanner"
                    component={ScannerScreen}
                    options={{ title: 'Escaner' }}
                />
                <AppStack.Screen
                    name="SaleStack"
                    component={SaleNavigator}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    </SQLiteProvider>
);

export default AppNavigator;