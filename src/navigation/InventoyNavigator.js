import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanWrapper from '../wrappers/SellScanWrapper';
import InventoryScreen from '../screens/inventory/InventoryScreen';
import { InventoryProvider } from '../contexts/InventoryContext';
import RegisterProductScreen from '../screens/inventory/RegisterProductScreen';
import EditProductScreen from '../screens/inventory/EditProductScreen';
import RegisterProductNavigator from './RegisterProductNavigator'

const InventoryStack = createNativeStackNavigator();

const InventoryNavigator = () => (
    <InventoryProvider>
        <InventoryStack.Navigator initialRouteName="Inventory">
            <InventoryStack.Screen
                name='Inventory'
                component={InventoryScreen}
                options={{ title: 'Inventario' }}
            />
            <InventoryStack.Screen
                name='RegisterProductStack'
                component={RegisterProductNavigator}
                options={{ headerShown: false }}
            />
            <InventoryStack.Screen
                name='EditProduct'
                component={EditProductScreen}
                options={{ title: 'Editar Producto' }}
            />
        </InventoryStack.Navigator>
    </InventoryProvider>
);

export default InventoryNavigator;