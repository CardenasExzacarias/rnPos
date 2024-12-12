import Model from "./Model";

export default class Products extends Model {
    static table = 'products';
    static fillable = [
        'name',
        'barcode',
        'unit_cost',
        'unit_price',
        'updated_at'
    ];

    id;
    name;
    barcode;
    unit_cost;
    unit_price;
    updated_at;
    created_at;
}