import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { database } from '../database/database'
import { useSQLiteContext } from 'expo-sqlite'

const ProductsView = () => {
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
    }

    return (
        <View style={styles.container}>
            <Text>ProductsView</Text>
            <Button title='See users' onPress={async () => alert(await fetchUsers())} />
        </View>
    )
}

export default ProductsView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
