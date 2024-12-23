import { createContext, ReactNode, useState } from "react";
import { Children } from "../types/General";

type BarcodeContextType = {
  barcode: string;
  setBarcode: React.Dispatch<React.SetStateAction<string>>;
};

export const BarcodeContext = createContext<BarcodeContextType>({
  barcode: "",
  setBarcode: () => {},
});

export const BarcodeProvider: React.FC<Children> = ({ children }) => {
  const [barcode, setBarcode] = useState<string>("");
  return (
    <BarcodeContext.Provider value={{ barcode, setBarcode }}>
      {children}
    </BarcodeContext.Provider>
  );
};
