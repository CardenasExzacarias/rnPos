import { Pressable, StyleSheet, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { useState } from "react";
import CustomInput from "../../components/inputs/CustomInput";
import GenericButton from "../../components/GenericButton";
import { Icon } from "react-native-elements";
import { SupplierRepository } from "../../repository/SupplierRepository";
import SupplierEditDto from "../../dtos/suppliers/SupplierEditDto";
import { useUpdate } from "../../hooks/useUpdate";
import { useToast } from "../../hooks/useToast";
import { IWhere } from "../../interfaces/IWhere";
import { RouteProp } from "@react-navigation/native";
import { EditSupplierParamList } from "../../types/EditSupplier";

interface EditSupplierScreenProps {
  route: RouteProp<EditSupplierParamList, "EditSupplier">;
}

const EditSupplierScreen: React.FC<EditSupplierScreenProps> = ({ route }) => {
  const where: IWhere = route.params.where;
  const [name, setName] = useState<string>(route.params.name);
  const [phone, setPhone] = useState<string>(route.params.phone);
  const [email, setEmail] = useState<string>(route.params.email);
  const update = useUpdate();
  const toast = useToast();

  const handleUpdate = async () => {
    try {
      await update(
        SupplierRepository,
        new SupplierEditDto(name, phone, email, where)
      );

      toast("¡Proveedor Actualizado!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.form}>
        <CustomInput placeholder="Nombre" value={name} onChange={setName} />
        <CustomInput
          placeholder="Número de teléfono"
          value={phone}
          onChange={setPhone}
        />
        <CustomInput
          placeholder="Correo electrónico"
          value={email}
          onChange={setEmail}
        />
        <View style={globalStyles.center_container}>
          <View style={styles.buttonContainer}>
            <GenericButton text={"Actualizar"} onPress={handleUpdate} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditSupplierScreen;

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
  inputContainer: {
    width: "92%",
  },
});
