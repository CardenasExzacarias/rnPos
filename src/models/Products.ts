import Model from "./Model";
export class Products extends Model {
    static table: string = 'products';
    static alias: string = 'p';
    static fillable: string[] = [
        'name',
        'barcode',
        'unit_cost',
        'unit_price',
        'quantity',
        'is_active'
    ];
    static searchable: string[] = [
        'id',
        'name',
        'barcode',
        'unit_cost',
        'unit_price',
        'quantity',
        'is_active',
        '*'
    ];
}