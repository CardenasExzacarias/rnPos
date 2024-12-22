import Model from "./Model";

export class Sales extends Model {
    static table: string = 'sales';
    static alias: string = 'sa';
    static fillable: string[] = [
        'unit_cost',
        'unit_price',
        'product_quantity',
        'ticket_id',
        'product_id'
    ];
}