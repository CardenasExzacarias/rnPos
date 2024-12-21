import { ProductRegisterDto } from "../dtos/products/ProductRegisterDto";
import { Products } from "../models/Products";

export class ProductRepository {
    static create(dto: ProductRegisterDto) {
        return Products.create(dto);
    }

    static getAll(fields: any[] = ['*']) {
        return Products.get(fields);
    }
}