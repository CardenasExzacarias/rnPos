import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useUpdate } from "../../hooks/useUpdate";
import { useToast } from "../../hooks/useToast";
import { ProductRepository } from "../../repository/ProductRepository";
import { ProductEditDto } from "../../dtos/products/ProductEditDto";
import { IWhere } from "../../interfaces/IWhere";
import { useFind } from "../../hooks/useFind";
import GenericButton from "../../components/GenericButton";
import CustomInput from "../../components/inputs/CustomInput";
import { globalStyles } from "../../styles/global";
import { StackScreenProps } from "@react-navigation/stack";
import { InventoryStackParamList } from "../../types/General";

type EditProductScreenProps = StackScreenProps<InventoryStackParamList, 'EditProduct'>;

type findProduct = {
  barcode: string;
  unit_cost: number;
};

const EditProductScreen: React.FC<EditProductScreenProps> = ({ route }) => {
  const where: IWhere = {
    field: "id",
    value: route.params.id,
  };

  const [name, setName] = useState<string>(route.params.name);
  const [quantity, setQuantity] = useState<string>(
    route.params.quantity ? route.params.quantity.toString() : ""
  );
  const [unitPrice, setUnitPrice] = useState<string>(
    route.params.unit_price ? route.params.unit_price.toString() : ""
  );

  const [product, setProduct] = useState<findProduct>({
    barcode: "",
    unit_cost: 0,
  });

  useFind(setProduct, ProductRepository, ["barcode", "unit_cost"], where);

  const [barcode, setBarcode] = useState<string>("");
  const [unitCost, setUnitCost] = useState<string>("");

  useEffect(() => {
    if (product && product.barcode && product.unit_cost) {
      setBarcode(product.barcode);
      setUnitCost(product.unit_cost ? product.unit_cost.toString() : "");
    }
  }, [product]);

  const update = useUpdate();
  const toast = useToast();

  const handleUpdate = async () => {
    try {
      await update(
        ProductRepository,
        new ProductEditDto(
          name,
          barcode,
          Number(unitCost),
          Number(unitPrice),
          Number(quantity),
          where
        )
      );

      toast("¡Producto Actualizado!");
    } catch (err) {
      console.log(err);
      toast("Ups, algo salió mal...");
    }
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.form}>
        <CustomInput placeholder="Nombre" value={name} onChange={setName} />
        <CustomInput
          placeholder="Código"
          value={barcode}
          onChange={setBarcode}
        />
        <CustomInput
          placeholder="Precio de venta"
          value={unitPrice}
          onChange={setUnitPrice}
        />
        <CustomInput
          placeholder="Costo de compra"
          value={unitCost}
          onChange={setUnitCost}
        />
        <CustomInput
          placeholder="Número de Unidades"
          value={quantity}
          onChange={setQuantity}
        />
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <GenericButton text={"Actualizar"} onPress={handleUpdate} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    height: "95%",
    width: "90%",
    marginTop: 15,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "50%",
  },
  scanContainer: {
    flexDirection: "row",
  },
  scanButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  inputContainer: {
    width: "92%",
  },
});
