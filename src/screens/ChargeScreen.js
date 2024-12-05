import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native';
import ProductsChargeDetails from '../components/ProductChargeDetails';
import GenericButton from '../components/GenericButton';
import { globalStyles } from '../styles/global';
import { useSale } from '../contexts/SaleContext';

const ChargeScreen = ({ navigation }) => {
    const { barcodes, setBarcodes } = useSale();

    //Busqueda en base de datos

    return (
        <View style={globalStyles.container}>
            <ScrollView>
                {
                    barcodes.map((barcode, index) => (
                        <ProductsChargeDetails
                            key={index}
                            product={barcode}
                        />
                    ))
                }
            </ScrollView>
            <GenericButton
                text={'Pagar'}
                onPress={() => alert('hola')}
            />
        </View>
    );
};

export default ChargeScreen;