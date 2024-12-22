import { Pressable, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useState } from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import GenericButton from '../../components/GenericButton';
import { Icon } from 'react-native-elements';
import SupplierRegisterDto from '../../dtos/suppliers/SupplierRegisterDto';
import { SupplierRepository } from '../../repository/SupplierRepository';
import { useRegister } from '../../hooks/useRegister';

const RegisterSupplierScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const register = useRegister();

    const handleRegister = async () => {
        try {
            register(SupplierRepository,
                new SupplierRegisterDto(
                    name,
                    phone,
                    email
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
                            text={'Registrar'}
                            onPress={handleRegister}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RegisterSupplierScreen;

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