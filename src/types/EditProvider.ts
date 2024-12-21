import { IWhere } from "../interfaces/IWhere";

export type EditProviderParamList = {
    EditProvider: {
      name: string;
      phone: string;
      email: string;
      where: IWhere;
    };
  };