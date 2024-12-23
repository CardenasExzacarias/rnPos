import { ProductEditDto } from "../dtos/products/ProductEditDto";
import { ProductRegisterDto } from "../dtos/products/ProductRegisterDto";
import { IModelCrud } from "../interfaces/IModelCrud";
import { IWhere } from "../interfaces/IWhere";
import { Products } from "../models/Products";

export class ProductRepository {
    static create(dto: ProductRegisterDto) {
        return Products.create(dto);
    }

    static getAll(fields: string[] = ['*']) {
        return Products.get(fields);
    }

    static update(dto: ProductEditDto) {
        return Products.update(dto);
    }

    static find(fields: string[] = ['*'], where: IWhere): IModelCrud {
        return Products.find(fields, where);
    }
}