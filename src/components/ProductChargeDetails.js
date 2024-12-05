import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ProductsChargeDetails = ({ product }) => {
  return (
    <View style={[globalStyles.item, styles.container]}>
      <Text>{product}</Text>
    </View>
  );
};

export default ProductsChargeDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});