import React, { useState } from "react";
import { Text, View } from "react-native";
import { EditProductParamList } from "../../types/EditProduct";
import { RouteProp } from "@react-navigation/native";
import { useUpdate } from "../../hooks/useUpdate";
import { useToast } from "../../hooks/useToast";
import { ProductRepository } from "../../repository/ProductRepository";
import { ProductEditDto } from "../../dtos/products/ProductEditDto";
import { IWhere } from "../../interfaces/IWhere";

interface EditProductScreenProps {
  route: RouteProp<EditProductParamList, "EditProduct">;
}

const EditProductScreen: React.FC<EditProductScreenProps> = ({ route }) => {
  const where: IWhere = route.params.where;
  const [name, setName] = useState(route.params.name);
  const [barcode, setBarcode] = useState(route.params.barcode);
  const [unitCost, setUnitcost] = useState(route.params.unit_cost);
  const [unitPrice, setUnitPrice] = useState(route.params.unit_price);

  const update = useUpdate();
  const toast = useToast();

  alert(where.value);

  const handleUpdate = async () => {
    try {
      //   await update(
      //     ProductRepository,
      //     new ProductEditDto(name, barcode, unitCost, unitPrice, where)
      //   );

      toast("¡Proveedor Actualizado!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>EditProductScreen</Text>
    </View>
  );
};

export default EditProductScreen;
