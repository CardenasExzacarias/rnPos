import React, { useEffect, useState } from "react";
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
import { Products } from "../../models/Products";
import { Suppliers } from "../../models/Suppliers";

type ProductsScreenProps = {
  navigation: NativeStackNavigationProp<any, "Inventory">;
};

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  const [products, setProducts] = useState<any[]>([]);

  useFetchAll(setProducts, ProductRepository, [
    `${Products.alias}.id AS product_id`,
    `${Products.alias}.name`,
    `${Products.alias}.barcode`,
    `${Products.alias}.unit_cost`,
    `${Products.alias}.unit_price`,
    `${Products.alias}.quantity`,
    `${Suppliers.alias}.id AS supplier_id`,
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={products}
        keyExtractor={(item) => item.barcode.toString()}
        renderItem={({ item }) => (
          <View style={[globalStyles.item, globalStyles.itemRow]}>
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
            <GenericButton
              text="Editar"
              onPress={() =>
                navigation.navigate(
                  "EditProduct",
                  new ProductEditDto(
                    item.name,
                    item.barcode,
                    item.unit_cost,
                    item.unit_price,
                    {
                      field: "id",
                      value: item.id,
                    }
                  )
                )
              }
            />
          </View>
        )}
      />
      <BottomRightButton
        onPress={() => navigation.navigate("RegisterProduct")}
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
