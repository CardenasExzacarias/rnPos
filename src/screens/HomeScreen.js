import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';
import GenericButton from '../components/GenericButton';
import { globalStyles } from '../styles/global';
import { useSQLiteContext } from 'expo-sqlite';

async function queryDatabase() {
    try {
        const db = useSQLiteContext();

        // const statement = await db.prepareAsync(
        //     'INSERT INTO products (name, unit_cost, unit_price) VALUES (?, ?, ?)'
        // );

        // let result = await statement.executeAsync('chocolate', 5, 10);

        // console.log(result);

        const res = await db.getAllAsync(`SELECT * FROM products;`);

        console.log(res);
    } catch (error) {
        console.log(error);
    }
}


const HomeScreen = ({ navigation }) => {
    queryDatabase();
    return (
        <View style={globalStyles.container}>
            <GenericButton
                onPress={() => navigation.navigate('SaleStack')}
                text={"Escanear"}
            />
            <GenericButton
                onPress={() => navigation.navigate('Products')}
                text={"Productos"}
            />
        </View>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
});