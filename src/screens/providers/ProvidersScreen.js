import React, { useEffect, useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRightButton from '../../components/BottomRightButton';
import { ProviderRepository } from '../../repository/ProviderRepository';
import { useFetchAll } from '../../hooks/useFetchAll';

const ProvidersScreen = ({ navigation }) => {
    const [providers, setProviers] = useState([]);
    useFetchAll(setProviers, ProviderRepository);

    return (
        <View style={styles.container}>
            {
                providers.map((provider, index) => (
                    <Text key={index}>{provider.name}</Text>
                ))
            }
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
