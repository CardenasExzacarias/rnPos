import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanWrapper from '../wrappers/SellScanWrapper';
import InventoryScreen from '../screens/inventory/InventoryScreen';
import { InventoryProvider } from '../contexts/InventoryContext';
import RegisterProductScreen from '../screens/inventory/RegisterProductScreen';
import EditProductScreen from '../screens/inventory/EditProductScreen';
import RegisterProductWrapper from '../wrappers/RegisterProductWrapper';
import ScanRegisterProductWrapper from '../wrappers/ScanRegisterProductWrapper';
import { BarcodeProvider } from '../contexts/BarcodeContext';

const RegisterProductStack = createNativeStackNavigator();

const RegisterProductNavigator = () => (
    <BarcodeProvider>
        <RegisterProductStack.Navigator initialRouteName="RegisterProduct">
            <RegisterProductStack.Screen
                name='RegisterProduct'
                component={RegisterProductScreen}
                options={{ title: 'Registrar Producto' }}
            />
            <RegisterProductStack.Screen
                name='ScanRegisterProduct'
                component={ScanRegisterProductWrapper}
                options={{ title: 'Escanear Producto' }}
            />
        </RegisterProductStack.Navigator>
    </BarcodeProvider>
);

export default RegisterProductNavigator;