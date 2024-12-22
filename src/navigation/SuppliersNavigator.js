import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SuppliersProvider } from '../contexts/SuppliersContext';
import SuppliersScreen from '../screens/suppliers/SuppliersScreen';
import RegisterSupplierScreen from '../screens/suppliers/RegisterSupplierScreen';
import EditSupplierScreen from '../screens/suppliers/EditSupplierScreen';

const SuppliersStack = createNativeStackNavigator();

const SuppliersNavigator = () => (
    <SuppliersProvider>
        <SuppliersStack.Navigator initialRouteName="Suppliers">
            <SuppliersStack.Screen
                name='Suppliers'
                component={SuppliersScreen}
                options={{ title: 'Proveedores' }}
            />
            <SuppliersStack.Screen
                name='RegisterSupplier'
                component={RegisterSupplierScreen}
                options={{ title: 'Registrar Proveedor' }}
            />
            <SuppliersStack.Screen
                name='EditSupplier'
                component={EditSupplierScreen}
                options={{ title: 'Editar Proveedor' }}
            />
        </SuppliersStack.Navigator>
    </SuppliersProvider>
);

export default SuppliersNavigator;