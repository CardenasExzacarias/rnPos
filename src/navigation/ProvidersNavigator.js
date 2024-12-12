import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProvidersProvider } from '../contexts/ProvidersContext';
import ProvidersScreen from '../screens/providers/ProvidersScreen';
import RegisterProviderScreen from '../screens/providers/RegisterProviderScreen';

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
        </ProvidersStack.Navigator>
    </ProvidersProvider>
);

export default ProvidersNavigator;