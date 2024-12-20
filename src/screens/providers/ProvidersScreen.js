import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRightButton from '../../components/BottomRightButton';
import { ProviderRepository } from '../../repository/ProviderRepository';
import { useFetchAll } from '../../hooks/useFetchAll';
import { globalStyles } from '../../styles/global';

const ProvidersScreen = ({ navigation }) => {
    const [providers, setProviers] = useState([]);
    useFetchAll(setProviers, ProviderRepository, [
        'id',
        'name',
        'phone',
        'email',
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={providers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={globalStyles.item}>
                        <View style={globalStyles.row}>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={[globalStyles.row, globalStyles.my_5]}>
                            <View style={globalStyles.column}>
                                <View style={globalStyles.row}>
                                    <Text>Teléfono:</Text>
                                    <Text style={globalStyles.mx_5}>
                                        {item.phone}
                                    </Text>
                                </View>
                            </View>
                            <View style={[globalStyles.column, globalStyles.mx_5]}>
                                <View style={globalStyles.row}>
                                    <Text>Correo:</Text>
                                    <Text style={globalStyles.mx_5}>
                                        {item.email}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            <BottomRightButton onPress={() => navigation.navigate('RegisterProvider')} />
        </View>
    );
};

export default ProvidersScreen;

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
