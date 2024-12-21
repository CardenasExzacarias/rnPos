import Model from "./Model";

export class Providers extends Model {
    static table: string = 'providers';
    static fillable: string[] = [
        'name',
        'phone',
        'email',
    ];
}