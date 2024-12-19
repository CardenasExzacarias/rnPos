import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import CustomDropdown from '../../components/inputs/CustomDropdown';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import { ProductRegisterDto } from '../../dtos/products/ProductRegisterDto';
import { ProductRepository } from '../../repository/ProductRepository';
import { useRegister } from '../../hooks/useRegister';
import { ProviderRepository } from '../../repository/ProviderRepository';
import { useFetchAll } from '../../hooks/useFetchAll';
import { ProductsProvidersRegisterDto } from '../../dtos/productsProviders/ProductsProvidersRegisterDto';
import { ProductsProvidersRepository } from '../../repository/ProductsProvidersRepository';

const RegisterProductScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [barcode, setBarcode] = useState('');

    const [providers, setProviders] = useState([]);
    useFetchAll(setProviders, ProviderRepository);

    const [selectedProvider, setSelectedProvider] = useState(null);

    const register = useRegister();

    const handleRegister = async () => {
        try {
            const product = await register(
                ProductRepository,
                new ProductRegisterDto(
                    name,
                    barcode,
                    unitCost,
                    unitPrice,
                )
            );
            register(
                ProductsProvidersRepository,
                new ProductsProvidersRegisterDto(
                    product,
                    selectedProvider
                )
            )
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.form}>
                <CustomInput
                    placeholder='Nombre'
                    value={name}
                    onChange={setName}
                />
                <View>
                    <View style={styles.scanContainer}>
                        <View style={styles.inputContainer}>
                            <CustomInput
                                placeholder='Código'
                                value={barcode}
                                onChange={setBarcode}
                            />
                        </View>
                        <View style={styles.scanButtonContainer}>
                            <Pressable onPress={() => alert('Escaneado!')}>
                                <Icon name='camera' type="font-awesome" />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <CustomDropdown
                    placeholder="Proveedores"
                    selectedValue={selectedProvider}
                    onValueChange={setSelectedProvider}
                    elementList={providers}
                />
                <CustomInput
                    placeholder='Precio de venta'
                    value={unitPrice}
                    onChange={setUnitPrice}
                />
                <CustomInput
                    placeholder='Costo de compra'
                    value={unitCost}
                    onChange={setUnitCost}
                />
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <GenericButton
                            text={'Registrar'}
                            onPress={handleRegister}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RegisterProductScreen;

const styles = StyleSheet.create({
    form: {
        height: '95%',
        width: '90%',
        marginTop: 15
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '50%'
    },
    scanContainer: {
        flexDirection: 'row',
    },
    scanButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    inputContainer: {
        width: '92%'
    }
});