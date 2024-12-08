import { useContext, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SellContext } from '../../contexts/SellContext';
import ScanScreen from '../ScanScreen';
import { ScanContext } from '../../contexts/ScanContext';

const ScanSellScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState('');
    const [barcode, setBarcode] = useState('');
    const { barcodes, setBarcodes } = useContext(SellContext);

    const { hasScanned, setHasScanned } = useContext(ScanContext);

    const handleBarcodeScanned = ({ type, data }) => {
        setModalVisible(true);
        setHasScanned(true);
        setType(type);
        setBarcode(data);
    };

    const handleContinue = () => {
        const updateBarcodes = barcodes;
        let barcodeIndex = -1;

        if (updateBarcodes.length !== 0) {
            barcodeIndex = updateBarcodes.findIndex(obj => obj.barcode === barcode)
        }

        if (barcodeIndex !== -1) {
            updateBarcodes[barcodeIndex].count++;
        } else {
            updateBarcodes.push({
                barcode,
                count: 1
            });
        }

        setBarcodes(updateBarcodes);
        setHasScanned(false);
        setModalVisible(false);
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
                            <Text>{`Código de barras: ${barcode} \nTipo: ${type}`}</Text>
                            <Pressable
                                onPress={() => { handleContinue() }}
                                style={
                                    ({ pressed }) => [
                                        { backgroundColor: pressed ? 'lightgray' : 'white', },
                                        styles.button,
                                    ]
                                }
                            >
                                <Text>Continuar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <ScanScreen handleScan={handleBarcodeScanned}>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('Charge')}
                        >
                            <Text style={styles.text}>Ir al Pago</Text>
                        </Pressable>
                    </View>
                </ScanScreen>
            </View>
        </SafeAreaProvider>
    );
}

export default ScanSellScreen;

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
