import React from 'react'
import { Text, View } from 'react-native';

const ChargeView = ({ route }) => {
    const { barcodes, setBarcodes } = route.params;
    return (
        <View>
            {
                barcodes.map((barcode) => (
                    <Text>{barcode}</Text>
                ))
            }
        </View>
    );
};

export default ChargeView;