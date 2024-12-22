import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomRightButton from '../../components/BottomRightButton';
import { SupplierRepository } from '../../repository/SupplierRepository';
import { useFetchAll } from '../../hooks/useFetchAll';
import { globalStyles } from '../../styles/global';
import GenericButton from '../../components/GenericButton';
import SupplierEditDto from '../../dtos/suppliers/SupplierEditDto';

const SuppliersScreen = ({ navigation }) => {
    const [suppliers, setProviers] = useState([]);

    useFetchAll(setProviers, SupplierRepository, [
        'id',
        'name',
        'phone',
        'email',
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={suppliers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={globalStyles.item}>
                        <View style={globalStyles.row}>
                            <View style={globalStyles.column}>
                                <Text>Nombre:</Text>
                            </View>
                            <View style={[globalStyles.column, globalStyles.mx_5]}>
                                <Text>{item.name}</Text>
                            </View>
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
                        <GenericButton
                            text='editar'
                            onPress={() => navigation.navigate('EditSupplier', new SupplierEditDto(
                                item.name,
                                item.phone,
                                item.email,
                                {
                                    field: 'id',
                                    value: item.id
                                }
                            ))}
                        />
                    </View>
                )}
            />
            <BottomRightButton onPress={() => navigation.navigate('RegisterSupplier')} />
        </View>
    );
};

export default SuppliersScreen;

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
