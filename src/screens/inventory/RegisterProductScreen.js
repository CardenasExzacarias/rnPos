import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';

const RegisterProductScreen = () => {
    const [name, setName] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [unitPrice, setUnitPrice] = useState('');

    return (
        <View style={globalStyles.container}>
            <TextInput
                placeholder='Nombre'
                value={name}
                onChange={setName}
            />
            <TextInput
                placeholder='Código'
                value={name}
                onChange={setName}
            />
            <TextInput
                placeholder='Precio de venta'
                value={unitPrice}
                onChange={setUnitPrice}
            />
            <TextInput
                placeholder='Costo de compra'
                value={unitCost}
                onChange={setUnitCost}
            />
        </View>
    );
};

export default RegisterProductScreen;

const style = StyleSheet.create({

});