import { Model } from "./Model";

export class Products extends Model {
    static table = 'products';
    static fields = [
        'id',
        'name',
        'barcode',
        'unit_cost',
        'unit_price',
        'created_at',
        'updated_at'
    ];
}