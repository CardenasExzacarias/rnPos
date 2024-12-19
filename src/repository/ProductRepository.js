import { Products } from "../models/Products";

export class ProductRepository {
    static create(ProductRegisterDto) {
        return Products.create(ProductRegisterDto);
    }

    static getAll(fields = ['*']) {
        return Products.get(fields);
    }
}