import React, { useEffect, useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import BottomRightButton from '../../components/BottomRightButton';
import GenericButton from '../../components/GenericButton';

const ProvidersScreen = ({ navigation }) => {
    const db = useSQLiteContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProviders = async () => {
            let result;
            try {
                result = await db.getAllAsync("SELECT id, name, phone, email FROM providers;");
            } catch (error) {
                console.error(error);
            }
            setProducts(result);
            console.log(products);
        };

        fetchProviders();
    }, []);

    return (
        <View style={styles.container}>
            <GenericButton text={'consolear proveedores'} onPress={() => alert('Proveedores')} />
            <BottomRightButton onPress={() => navigation.navigate('RegisterProvider')} />
        </View>
    );
};

export default ProvidersScreen;

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
