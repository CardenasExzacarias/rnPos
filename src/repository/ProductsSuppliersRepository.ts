import { ProductsSuppliersRegisterDto } from "../dtos/productsSuppliers/ProductsSuppliersRegisterDto";
import { ProductsSuppliers } from "../models/ProductsSuppliers";

export class ProductsSuppliersRepository {
    static create(dto: ProductsSuppliersRegisterDto) {
        return ProductsSuppliers.create(dto);
    }

    static getAll(fields: any[] = ['*']) {
        return ProductsSuppliers.get(fields);
    }
}