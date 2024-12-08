import React from 'react'
import { ScanProvider } from '../contexts/ScanContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanSaleScreen from '../screens/ScanSaleScreen';

const ScanStack = createNativeStackNavigator();

const ScanNavigator = () => {
    return (
        <ScanProvider>
            <ScanStack.Navigator>
                <ScanStack.Screen
                    name='ScannerSale'
                    component={ScanSaleScreen}
                    options={{ title: 'Escanear Productos' }}
                />
            </ScanStack.Navigator>
        </ScanProvider>
    )
}

export default ScanNavigator