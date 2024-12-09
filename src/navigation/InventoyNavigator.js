import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanWrapper from '../components/wrappers/ScanWrapper';
import InventoryScreen from '../screens/inventory/InventoryScreen';
import { InventoryProvider } from '../contexts/InventoryContext';
import RegisterProductScreen from '../screens/inventory/RegisterProductScreen';

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
                name='RegisterProduct'
                component={({ navigation }) => (
                    <ScanWrapper>
                        <RegisterProductScreen navigation={navigation} />
                    </ScanWrapper>
                )}
                options={{ title: 'Registrar Producto' }}
            />
        </InventoryStack.Navigator>
    </InventoryProvider>
);

export default InventoryNavigator;