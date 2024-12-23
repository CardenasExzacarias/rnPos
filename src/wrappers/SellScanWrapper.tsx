import React from "react";
import { ScanProvider } from "../contexts/ScanContext";
import ScanSellScreen from "../screens/sell/ScanSellScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SellScanWrapperProps = {
  navigation: NativeStackNavigationProp<any, "ScanSellScreen">;
};

const SellScanWrapper: React.FC<SellScanWrapperProps> = ({ navigation }) => {
  return (
    <ScanProvider>
      <ScanSellScreen navigation={navigation} />
    </ScanProvider>
  );
};

export default SellScanWrapper;
