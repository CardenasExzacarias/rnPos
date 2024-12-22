import QueryBuilder from "../database/QueryBuilder";
import { ProductRegisterDto } from "../dtos/products/ProductRegisterDto";
import { Products } from "../models/Products";
import { ProductsSuppliers } from "../models/ProductsSuppliers";
import { Suppliers } from "../models/Suppliers";
import { JoinTransaction } from "../types/JoinTransaction";

export class ProductRepository {
    static create(dto: ProductRegisterDto) {
        return Products.create(dto);
    }

    static getAll(fields: string[]) {
        let query = QueryBuilder.select(fields);

        query += QueryBuilder.from(Products.table);

        query += QueryBuilder.as(Products.alias);

        const joins: JoinTransaction[] = [
            {
                join: ProductsSuppliers.table,
                as: ProductsSuppliers.alias,
                onFirstTable: `${Products.alias}.id`,
                operator: '=',
                onSecondTable: `${ProductsSuppliers.alias}.product_id`
            },
            {
                join: Suppliers.table,
                as: Suppliers.alias,
                onFirstTable: `${Suppliers.alias}.id`,
                operator: '=',
                onSecondTable: `${ProductsSuppliers.alias}.supplier_id`
            }
        ];

        joins.forEach((join) => query += ` ${QueryBuilder.innerJoin(join)}`);

        return query;
    }
}