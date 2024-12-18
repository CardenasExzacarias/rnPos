import React, { useEffect, useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRightButton from '../../components/BottomRightButton';
import { ProductRepository } from '../../repository/ProductRepository';
import { useFetchAll } from '../../hooks/useFetchAll';

const ProductsScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useFetchAll(setProducts, ProductRepository);

    return (
        <View style={styles.container}>
            {
                products.map((product, index) => (
                    <Text key={index}>{product.name}</Text>
                ))
            }
            <BottomRightButton onPress={() => navigation.navigate('RegisterProduct')} />
        </View>
    );
};

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
});

/*
        <View style={styles.container}>
            <Text>ProductsView</Text>
            <Button title='See users' onPress={async () => alert(await fetchUsers())} />
        </View>
*/