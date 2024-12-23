import { Pressable, StyleSheet, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { useContext, useState } from "react";
import CustomInput from "../../components/inputs/CustomInput";
import GenericButton from "../../components/GenericButton";
import { Icon } from "react-native-elements";
import { ProductRegisterDto } from "../../dtos/products/ProductRegisterDto";
import { ProductRepository } from "../../repository/ProductRepository";
import { useRegister } from "../../hooks/useRegister";
import { useToast } from "../../hooks/useToast";
import { ScanContext } from "../../contexts/ScanContext";
import { BarcodeContext } from "../../contexts/BarcodeContext";

const RegisterProductScreen: React.FC = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [unitCost, setUnitCost] = useState<string>("");
  const [unitPrice, setUnitPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const { barcode, setBarcode } = useContext(BarcodeContext);

  const register = useRegister();
  const toast = useToast();

  const handleRegister = async () => {
    try {
      await register(
        ProductRepository,
        new ProductRegisterDto(
          name,
          barcode,
          Number(unitCost),
          Number(unitPrice),
          Number(quantity)
        )
      );

      toast("¡Producto registrado!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.form}>
        <CustomInput placeholder="Nombre" value={name} onChange={setName} />
        <View>
          <View style={styles.scanContainer}>
            <View style={styles.inputContainer}>
              <CustomInput
                placeholder="Código"
                value={barcode}
                onChange={setBarcode}
              />
            </View>
            <View style={styles.scanButtonContainer}>
              <Pressable
                onPress={() => navigation.navigate("ScanRegisterProduct")}
              >
                <Icon name="camera" type="font-awesome" />
              </Pressable>
            </View>
          </View>
        </View>
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
            <GenericButton text={"Registrar"} onPress={handleRegister} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterProductScreen;

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
