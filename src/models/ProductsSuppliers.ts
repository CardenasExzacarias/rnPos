import Model from "./Model";

export class ProductsSuppliers extends Model {
    static table: string = 'products_suppliers';
    static alias: string = 'ps';
    static fillable: string[] = [
        'product_id',
        'supplier_id'
    ];
    static searchable: string[] = [
        'product_id',
        'supplier_id',
        '*'
    ];
}