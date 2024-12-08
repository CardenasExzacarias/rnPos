import React, { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import ScannerScreen from '../ScanScreen';
import BottomRightButton from '../../components/BottomRightButton';

const ProductsScreen = ({ navigation }) => {
    const db = useSQLiteContext();
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        let result;
        try {
            result = await db.getAllAsync("SELECT name, barcode FROM ;");
        } catch (error) {
            console.error(error);
        }
        setUsers(result);
        console.log(users);
        return users;
    };

    return (
        <View style={styles.container}>
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