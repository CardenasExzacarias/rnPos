import React, { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import ScannerScreen from '../ScanScreen';
import BottomRightButton from '../../components/BottomRightButton';
import GenericButton from '../../components/GenericButton';

const ProductsScreen = ({ navigation }) => {
    const db = useSQLiteContext();
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        let result;
        try {
            result = await db.getAllAsync("SELECT name, unit_cost FROM products;");
        } catch (error) {
            console.error(error);
        }
        setProducts(result);
        console.log(products);
        return products;
    };

    return (
        <View style={styles.container}>
            <GenericButton text={'consolear productos'} onPress={async () => await fetchProducts()} />
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