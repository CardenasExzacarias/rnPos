import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import { ProviderRepository } from '../../repository/ProviderRepository';
import ProviderEditDto from '../../dtos/providers/ProviderEditDto';
import { useUpdate } from '../../hooks/useUpdate';

const EditProviderScreen = ({ route }) => {
    const where = route.params.where;
    const [name, setName] = useState(route.params.name);
    const [phone, setPhone] = useState(route.params.phone);
    const [email, setEmail] = useState(route.params.email);
    const update = useUpdate();

    const handleUpdate = async () => {
        console.log('Actualizado!');
        try {
            update(ProviderRepository,
                new ProviderEditDto(
                    name,
                    phone,
                    email,
                    where
                )
            );
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.form}>
                <CustomInput
                    placeholder='Nombre'
                    value={name}
                    onChange={setName}
                />
                <CustomInput
                    placeholder='Número de teléfono'
                    value={phone}
                    onChange={setPhone}
                />
                <CustomInput
                    placeholder='Correo electrónico'
                    value={email}
                    onChange={setEmail}
                />
                <View style={globalStyles.center_container}>
                    <View style={styles.buttonContainer}>
                        <GenericButton
                            text={'Actualizar'}
                            onPress={handleUpdate}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default EditProviderScreen;

const styles = StyleSheet.create({
    form: {
        height: '95%',
        width: '90%',
        marginTop: 15
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '50%'
    },
    inputContainer: {
        width: '92%'
    }
});