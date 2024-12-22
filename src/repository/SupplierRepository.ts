import SupplierEditDto from "../dtos/suppliers/SupplierEditDto";
import SupplierRegisterDto from "../dtos/suppliers/SupplierRegisterDto";
import { Suppliers } from "../models/Suppliers";

export class SupplierRepository {
    static create(dto: SupplierRegisterDto) {
        return Suppliers.create(dto);
    }

    static getAll(fields: any[] = ['*']) {
        return Suppliers.get(fields);
    }

    static update(dto: SupplierEditDto) {
        return Suppliers.update(dto);
    }
}