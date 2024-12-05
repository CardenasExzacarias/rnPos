import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSale } from '../contexts/SaleContext';

const ScannerScreen = ({ navigation }) => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState('');
    const [barcode, setBarcode] = useState('');
    const { barcodes, setBarcodes } = useSale();

    if (!permission) {
        // Camera permissions are still loading.
        return (
            <View>
                <Text>No hay permiso para utilizar la cámara</Text>
            </View>
        );
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Es necesario dar permiso para uso de la cámara</Text>
                <Button onPress={requestPermission} title="Dar permiso" />
            </View>
        );
    }

    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true);
        setModalVisible(true);
        setType(type);
        setBarcode(data);
    };

    const handleContinue = () => {
        setScanned(false);
        setModalVisible(false);
        const updateBarcodes = barcodes;
        updateBarcodes.push(barcode);
        setBarcodes(updateBarcodes);
        console.log(barcodes);
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>{`Bar code with type ${type} and data ${barcode} has been scanned!`}</Text>
                            <Pressable
                                onPress={() => { handleContinue() }}
                                style={
                                    ({ pressed }) => [
                                        { backgroundColor: pressed ? 'lightgray' : 'white', },
                                        styles.button,
                                    ]
                                }
                            >
                                <Text style={styles.text}>Continuar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <CameraView
                    style={styles.camera}
                    facing={facing}
                    onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417", 'ean13', 'ean8', 'upc_a'],
                    }}
                >
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('Charge')}
                        >
                            <Text style={styles.text}>Ir al Pago</Text>
                        </Pressable>
                    </View>
                </CameraView>
            </View>
        </SafeAreaProvider>
    );
}

export default ScannerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: 64,
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
