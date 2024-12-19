import { ProductsProviders } from "../models/ProductsProviders";

export class ProductsProvidersRepository {
    static create(ProductsProvidersRegisterDto) {
        return ProductsProviders.create(ProductsProvidersRegisterDto);
    }

    static getAll(fields = ['*']) {
        return Products.get(fields);
    }
}