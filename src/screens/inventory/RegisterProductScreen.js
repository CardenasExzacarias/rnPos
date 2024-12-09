import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useContext, useState } from 'react';
import { ScanContext } from '../../contexts/ScanContext';
import CustomInput from '../../components/inputs/CustomInput';
import CustomDropdown from '../../components/inputs/CustomDropdown';

const RegisterProductScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [provider, setProvider] = useState('');
    const [barcode, setBarcode] = useState('');

    return (
        <View style={globalStyles.container}>
            <View style={styles.form}>
                <CustomInput
                    placeholder='Nombre'
                    value={name}
                    onChange={setName}
                />
                <CustomInput
                    placeholder='Código'
                    value={barcode}
                    onChange={setBarcode}
                />
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
            </View>
        </View>
    );
};

export default RegisterProductScreen;

const styles = StyleSheet.create({
    form: {
        height: '95%'
    }
});