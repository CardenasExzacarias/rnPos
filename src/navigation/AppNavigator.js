import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from 'expo-sqlite';
import { initDatabase } from '../database/database';
import HomeScreen from '../screens/HomeScreen';
import SellNavigator from './SellNavigator';
import InventoryNavigator from './InventoyNavigator';
import ProvidersNavigator from './ProvidersNavigator';

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
                    name="InventoryStack"
                    component={InventoryNavigator}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ProvidersStack"
                    component={ProvidersNavigator}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="SellStack"
                    component={SellNavigator}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    </SQLiteProvider>
);

export default AppNavigator;