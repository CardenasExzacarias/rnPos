import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from 'expo-sqlite';
import { createTables } from '../database/database';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen'
import SaleNavigator from './SaleNavigator';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="Products" component={ProductsScreen} />
            <AppStack.Screen name="SaleStack" component={SaleNavigator} />
        </AppStack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;

/*
        <ChargeView />
        <SQLiteProvider databaseName='user.db' onInit={createTables}>
            <ProductsView />
        </SQLiteProvider>
*/