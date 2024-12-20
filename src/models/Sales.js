import Model from "./Model";

class Sales extends Model {
    static table = 'sales';
    static fillable = [
        'unit_cost',
        'unit_price',
        'product_quantity',
        'ticket_id',
        'product_id'
    ];
}