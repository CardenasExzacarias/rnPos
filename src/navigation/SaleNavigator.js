import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SaleProvider } from '../contexts/SaleContext';
import ChargeScreen from '../screens/ChargeScreen';
import ScanSaleScreen from '../screens/ScanSaleScreen';
import ScanNavigator from './ScanNavigator';

const SaleStack = createNativeStackNavigator();

const SaleNavigator = () => (
    <SaleProvider>
        <SaleStack.Navigator initialRouteName="ScannerSale">
            <SaleStack.Screen
                name='ScannerSale'
                component={ScanNavigator}
                options={{ headerShown: false }}
            />
            <SaleStack.Screen
                name='Charge'
                component={ChargeScreen}
                options={{ title: 'Pago' }}
            />
        </SaleStack.Navigator>
    </SaleProvider>
);

export default SaleNavigator;