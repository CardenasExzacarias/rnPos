import { CameraView, useCameraPermissions } from "expo-camera";
import React, { ReactPortal, useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScanContext } from "../contexts/ScanContext";

type ScanScreenProps = {
  children: ReactPortal;
  handleScan: () => void;
};

const ScanScreen: React.FC<ScanScreenProps> = ({ children, handleScan }) => {
  const facing = "back";
  const [permission, requestPermission] = useCameraPermissions();
  const { hasScanned, setHasScanned } = useContext(ScanContext);

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
        <Text style={styles.message}>
          Es necesario dar permiso para uso de la cámara
        </Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={hasScanned ? undefined : handleScan}
        barcodeScannerSettings={{
          barcodeTypes: [
            "aztec",
            "ean13",
            "ean8",
            "qr",
            "pdf417",
            "upc_e",
            "datamatrix",
            "code39",
            "code93",
            "itf14",
            "codabar",
            "code128",
            "upc_a",
          ],
        }}
      >
        {children}
      </CameraView>
    </View>
  );
};

export default ScanScreen;

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
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
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
