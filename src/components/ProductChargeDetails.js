import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Icon } from "react-native-elements";
import ItemCount from "./ItemCount";
import { SellContext } from "../contexts/SellContext";

const ProductsChargeDetails = ({ componentKey, product, count }) => {
  const price = 15;

  const [productCount, setProductCount] = useState(count);
  const { barcodes, setBarcodes } = useContext(SellContext);

  const updateBarcodes = barcodes;
  updateBarcodes[componentKey].count = productCount;
  setBarcodes(updateBarcodes);

  return (
    <View style={[globalStyles.item, globalStyles.itemRow]}>
      <View style={globalStyles.itemRow}>
        <ItemCount count={productCount} setCount={setProductCount} />
        <View style={{ marginHorizontal: 10 }}>
          <Text>{product}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 3 }}>
        <Text>${price * productCount}</Text>
      </View>
    </View>
  );
};

export default ProductsChargeDetails;