import Model from "./Model";

export default class Providers extends Model {
    static table = 'providers';

    static fillable = [
        'name',
        'phone',
        'email',
        'updated_at',
    ];
}