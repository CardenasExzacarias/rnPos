import React, { useState } from 'react'
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import { database } from '../database/database'
import { useSQLiteContext } from 'expo-sqlite'
import ScannerScreen from './ScanScreen';

const ProductsScreen = () => {
    const db = useSQLiteContext();
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        let result;
        try {
            result = await db.getAllAsync("SELECT * FROM sqlite_master WHERE type='table';");
        } catch (error) {
            console.error(error);
        }
        setUsers(result);
        console.log(users);
        return users;
    };

    const handleScan = () => alert('Hola');

    return (
        <ScannerScreen handleScan={handleScan}>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => alert('aloooooo')}
                >
                    <Text style={styles.text}>Ir al Pago</Text>
                </Pressable>
            </View>
        </ScannerScreen>
    );
};

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: 64,
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