import Model from "./Model";

export class Suppliers extends Model {
    static table: string = 'suppliers';
    static alias: string = 'su';
    static fillable: string[] = [
        'name',
        'phone',
        'email',
    ];
    static searchable: string[] = [
        'id',
        'name',
        'phone',
        'email',
        '*'
    ]
}