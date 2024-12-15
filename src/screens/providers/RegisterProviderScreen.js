import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import { useSQLiteContext } from 'expo-sqlite';
import ProviderRegisterDto from '../../dtos/providers/ProviderRegisterDto';
import { ProviderRepository } from '../../repository/ProviderRepository';

const RegisterProviderScreen = ({ navigation }) => {
    const db = useSQLiteContext();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        const provider = new ProviderRegisterDto(
            name,
            phone,
            email
        );

        const { query, values } = ProviderRepository.create(provider);

        db.runAsync(query, values);
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
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <GenericButton
                            text={'Registrar'}
                            onPress={handleRegister}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RegisterProviderScreen;

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
    scanContainer: {
        flexDirection: 'row',
    },
    scanButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    inputContainer: {
        width: '92%'
    }
});