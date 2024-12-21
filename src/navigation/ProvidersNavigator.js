import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProvidersProvider } from '../contexts/ProvidersContext';
import ProvidersScreen from '../screens/providers/ProvidersScreen';
import RegisterProviderScreen from '../screens/providers/RegisterProviderScreen';
import EditProviderScreen from '../screens/providers/EditProviderScreen';

const ProvidersStack = createNativeStackNavigator();

const ProvidersNavigator = () => (
    <ProvidersProvider>
        <ProvidersStack.Navigator initialRouteName="Providers">
            <ProvidersStack.Screen
                name='Providers'
                component={ProvidersScreen}
                options={{ title: 'Proveedores' }}
            />
            <ProvidersStack.Screen
                name='RegisterProvider'
                component={RegisterProviderScreen}
                options={{ title: 'Registrar Proveedor' }}
            />
            <ProvidersStack.Screen
                name='EditProvider'
                component={EditProviderScreen}
                options={{ title: 'Editar Proveedor' }}
            />
        </ProvidersStack.Navigator>
    </ProvidersProvider>
);

export default ProvidersNavigator;