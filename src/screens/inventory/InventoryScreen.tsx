import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRightButton from '../../components/BottomRightButton';
import { ProductRepository } from '../../repository/ProductRepository';
import { useFetchAll } from '../../hooks/useFetchAll';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { globalStyles } from '../../styles/global';
import GenericButton from '../../components/GenericButton';
import { ProductEditDto } from '../../dtos/products/ProductEditDto';

type ProductsScreenProps = {
    navigation: NativeStackNavigationProp<any, 'Inventory'>
}

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
    const [products, setProducts] = useState<any[]>([]);

    useFetchAll(setProducts, ProductRepository, [
        'name',
        'barcode',
        'unit_cost',
        'unit_price',
        'quantity'
    ]);

    return (
        <View style={styles.container} >
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={products}
                keyExtractor={(item) => item.barcode.toString()}
                renderItem={({ item }) => (
                    <View style={[globalStyles.item, globalStyles.itemRow]}>
                        <Text>{item.name}</Text>
                        <Text>{item.quantity}</Text>
                        <GenericButton
                            text='Editar'
                            onPress={() => navigation.navigate('EditProduct', new ProductEditDto(
                                item.name,
                                item.barcode,
                                item.unit_cost,
                                item.unit_price,
                                {
                                    field: 'barcode',
                                    value: item.barcode
                                }
                            ))}
                        />
                    </View>
                )}
            />
            <BottomRightButton onPress={() => navigation.navigate('RegisterProduct')} />
        </View>
    );
};

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        width: '100%',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
});