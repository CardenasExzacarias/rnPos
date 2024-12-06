import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductsChargeDetails from '../components/ProductChargeDetails';
import GenericButton from '../components/GenericButton';
import { globalStyles } from '../styles/global';
import { useSale } from '../contexts/SaleContext';

const ChargeScreen = ({ navigation }) => {
    const { barcodes, setBarcodes } = useSale();
    return (
        <View style={globalStyles.container}>
            <ScrollView>
                {
                    barcodes.map((data, index) => {
                        return <ProductsChargeDetails
                            key={index}
                            componentKey={index}
                            product={data.barcode}
                            count={data.count}
                        />
                    })
                }
            </ScrollView>
            <View style={styles.buttonContainer}>
                <GenericButton
                    text={'Pagar'}
                    onPress={() => alert('hola')}
                />
            </View>
        </View>
    );
};

export default ChargeScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
    }
});