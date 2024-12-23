import { useContext, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SellContext } from "../../contexts/SellContext";
import ScanScreen from "../ScanScreen";
import { ScanContext } from "../../contexts/ScanContext";
import { BarcodeContext } from "../../contexts/BarcodeContext";

const ScanProductRegisterScreen = ({ navigation }) => {
  const { barcode, setBarcode } = useContext(BarcodeContext);

  const handleBarcodeScanned = ({ type, data }) => {
    setBarcode(data);
    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScanScreen handleScan={handleBarcodeScanned}>
          <View style={styles.buttonContainer}></View>
        </ScanScreen>
      </View>
    </SafeAreaProvider>
  );
};

export default ScanProductRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
});
