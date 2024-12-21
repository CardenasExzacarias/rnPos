import { ProductsProvidersRegisterDto } from "../dtos/productsProviders/ProductsProvidersRegisterDto";
import { ProductsProviders } from "../models/ProductsProviders";

export class ProductsProvidersRepository {
    static create(dto: ProductsProvidersRegisterDto) {
        return ProductsProviders.create(dto);
    }

    static getAll(fields: any[] = ['*']) {
        return ProductsProviders.get(fields);
    }
}