import { createContext, useState } from "react";
import { InventoryProductDto } from "../dtos/products/InventoryProductDto";
import { Children } from "../types/General";

type InventoryContextType = {
  products: InventoryProductDto[];
  setProducts: React.Dispatch<React.SetStateAction<InventoryProductDto[]>>;
};

export const InventoryContext = createContext<InventoryContextType>({
  products: [],
  setProducts: () => {},
});

export const InventoryProvider: React.FC<Children> = ({ children }) => {
  const [products, setProducts] = useState<InventoryProductDto[]>([]);
  return (
    <InventoryContext.Provider value={{ products, setProducts }}>
      {children}
    </InventoryContext.Provider>
  );
};
