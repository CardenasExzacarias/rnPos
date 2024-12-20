import Model from "./Model";

export class Products extends Model {
    static table = 'products';
    static fillable = [
        'name',
        'barcode',
        'unit_cost',
        'unit_price',
        'quantity',
        'is_active'
    ];
}