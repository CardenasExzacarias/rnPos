import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomRightButton from "../../components/BottomRightButton";
import { ProductRepository } from "../../repository/ProductRepository";
import { useFetchAll } from "../../hooks/useFetchAll";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/global";
import GenericButton from "../../components/GenericButton";
import { ProductEditDto } from "../../dtos/products/ProductEditDto";
import { InventoryContext } from "../../contexts/InventoryContext";

type ProductsScreenProps = {
  navigation: NativeStackNavigationProp<any, "Inventory">;
};

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  const { products, setProducts } = useContext(InventoryContext);

  useFetchAll(setProducts, ProductRepository, [
    "id",
    "name",
    "unit_price",
    "quantity",
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={globalStyles.item}
            onPress={() => navigation.navigate("EditProduct", item)}
          >
            <View style={[globalStyles.itemRow]}>
              <Text>{item.name}</Text>
              <Text>${item.unit_price}</Text>
            </View>
            <View style={globalStyles.row}>
              <Text>Disponibles: </Text>
              <Text>{item.quantity}</Text>
            </View>
          </Pressable>
        )}
      />
      <BottomRightButton
        onPress={() => navigation.navigate("RegisterProductStack")}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
});
