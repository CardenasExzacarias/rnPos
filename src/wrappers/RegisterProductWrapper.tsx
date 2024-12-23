import React from "react";
import { ScanProvider } from "../contexts/ScanContext";
import ScanSellScreen from "../screens/sell/ScanSellScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RegisterProductScreen from "../screens/inventory/RegisterProductScreen";
import { BarcodeProvider } from "../contexts/BarcodeContext";

type RegisterProductWrapperProps = {
  navigation: NativeStackNavigationProp<any, "RegisterProductScreen">;
};

const RegisterProductWrapper: React.FC<RegisterProductWrapperProps> = ({
  navigation,
}) => {
  return (
    <BarcodeProvider>
      <RegisterProductScreen navigation={navigation} />
    </BarcodeProvider>
  );
};

export default RegisterProductWrapper;
