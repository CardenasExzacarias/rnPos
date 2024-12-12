import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import { useSQLiteContext } from 'expo-sqlite';
import ProviderRegisterDto from '../../dtos/providers/ProviderRegisterDto';
import ProviderRegisterService from '../../services/register/ProviderRegisterService';

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

        const ProviderRegister = ProviderRegisterService.create(provider);

        //db.runAsync(query, authorizedValues);
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
                    placeholder='Número de Teléfono'
                    value={phone}
                    onChange={setPhone}
                />
                <CustomInput
                    placeholder='Costo de compra'
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