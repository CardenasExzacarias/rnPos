import React from "react";
import { ScanProvider } from "../contexts/ScanContext";
import ScanSellScreen from "../screens/sell/ScanSellScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RegisterProductScreen from "../screens/inventory/RegisterProductScreen";
import { BarcodeProvider } from "../contexts/BarcodeContext";
import ScanProductRegisterScreen from "../screens/inventory/ScanProductRegisterScreen";

type ScanRegisterProductWrapperProps = {
  navigation: NativeStackNavigationProp<any, "RegisterProductScreen">;
};

const ScanRegisterProductWrapper: React.FC<ScanRegisterProductWrapperProps> = ({
  navigation,
}) => {
  return (
    <ScanProvider>
      <ScanProductRegisterScreen navigation={navigation} />
    </ScanProvider>
  );
};

export default ScanRegisterProductWrapper;
