import React, { Dispatch, SetStateAction, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { View } from 'react-native'
import { globalStyles } from '../styles/global';
import { Icon } from 'react-native-elements';

type ItemCountProps = {
    count: number;
    setCount: Dispatch<SetStateAction<number>>,
}

const ItemCount: React.FC<ItemCountProps> = ({ count, setCount }) => {
    return (
        <View style={globalStyles.itemRow}>
            <Pressable style={
                ({ pressed }) => [
                    { backgroundColor: pressed ? 'lightgray' : 'white', }
                ]}
                onPress={() => setCount(count - 1)}
            >
                <Icon name="chevron-left" type="material" size={20} color="#000" />
            </Pressable>
            <Text style={styles.count}>{count}</Text>
            <Pressable style={
                ({ pressed }) => [
                    { backgroundColor: pressed ? 'lightgray' : 'white', }
                ]}
                onPress={() => setCount(count + 1)}
            >
                <Icon name="chevron-right" type="material" size={20} color="#000" />
            </Pressable>
        </View>
    )
}

export default ItemCount;

const styles = StyleSheet.create({
    count: {
        marginHorizontal: 5
    }
});