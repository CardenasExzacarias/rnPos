import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import CustomDropdown from '../../components/inputs/CustomDropdown';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import { useSQLiteContext } from 'expo-sqlite';
import ProductRegisterDto from '../../dtos/products/ProductRegisterDto';
import { ProductRegisterRepository } from '../../repository/register/ProductRegisterRepository';

const RegisterProductScreen = ({ navigation }) => {
    const db = useSQLiteContext();

    const [name, setName] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [provider, setProvider] = useState('');
    const [barcode, setBarcode] = useState('');

    const handleRegister = () => {
        const product = new ProductRegisterDto(
            name,
            barcode,
            unitCost,
            unitPrice,
            provider
        );

        console.log(provider);

        const productRegister = ProductRegisterRepository.create(product);

        //db.runAsync(query, authorizedValues);
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
                    placeholder='Proveedores'
                    selectedValue={provider}
                    onValueChange={setProvider}
                    elementList={['Pepsico', 'Coca-Cola']}
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