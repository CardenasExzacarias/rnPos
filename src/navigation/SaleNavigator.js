import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SaleProvider } from '../contexts/SaleContext';
import ScannerScreen from '../screens/ScannerScreen';
import ChargeScreen from '../screens/ChargeScreen';

const SaleStack = createNativeStackNavigator();

const SaleNavigator = () => (
    <SaleProvider>
        <SaleStack.Navigator initialRouteName="Scanner">
            <SaleStack.Screen
                name='Scanner'
                component={ScannerScreen}
                options={{ title: 'Escanear Productos' }}

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