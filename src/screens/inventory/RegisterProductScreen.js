import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useContext, useState } from 'react';
import { ScanContext } from '../../contexts/ScanContext';
import CustomInput from '../../components/inputs/CustomInput';
import CustomDropdown from '../../components/inputs/CustomDropdown';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import { Products } from '../../models/Products';
import { useSQLiteContext } from 'expo-sqlite';

const RegisterProductScreen = ({ navigation }) => {
    const db = useSQLiteContext();
    
    const [name, setName] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [provider, setProvider] = useState('');
    const [barcode, setBarcode] = useState('');

    const handleRegister = () => {
        const { query, authorizedValues } = Products.insert({
            name: 'chocolate',
            unit_cost: 16
        });

        db.runAsync(query, authorizedValues);
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
                        <CustomInput
                            placeholder='Código'
                            value={barcode}
                            onChange={setBarcode}
                        />
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
        height: '95%'
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
        maxWidth: '50%'
    },
    scanButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    }
});