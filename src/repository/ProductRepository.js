import { Products } from "../models/Products";

export class ProductRepository {
    static create(ProductRegisterDto) {
        const { providerId, ...product } = ProductRegisterDto;
        const { query, values } = Products.create(product);

        return { providerId, query, values };
    }

    static getAll(fields = ['*']) {
        return Products.get(fields);
    }
}