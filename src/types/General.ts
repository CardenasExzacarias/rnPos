import { ReactNode } from "react"
import { InventoryProductDto } from "../dtos/products/InventoryProductDto";

export type Children = {
    children: ReactNode
}

export type InventoryStackParamList = {
    Inventory: undefined; // No params for this screen
    RegisterProductStack: undefined; // No params for this screen
    EditProduct: InventoryProductDto; // Example params for EditProductScreen
};
