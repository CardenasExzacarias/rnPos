import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SellProvider } from '../contexts/SellContext';
import ChargeScreen from '../screens/sell/ChargeScreen';
import ScanWrapper from '../components/wrappers/ScanWrapper';
import ScanSellScreen from '../screens/sell/ScanSellScreen';

const SellStack = createNativeStackNavigator();

const SellNavigator = () => (
    <SellProvider>
        <SellStack.Navigator initialRouteName="ScannerSell">
            <SellStack.Screen
                name='ScannerSell'
                component={({ navigation }) => (
                    <ScanWrapper>
                        <ScanSellScreen navigation={navigation} />
                    </ScanWrapper>
                )}
                options={{ title: 'Escanear Productos' }}
            />
            <SellStack.Screen
                name='Charge'
                component={ChargeScreen}
                options={{ title: 'Pago' }}
            />
        </SellStack.Navigator>
    </SellProvider>
);

export default SellNavigator;