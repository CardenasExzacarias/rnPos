import Model from "./Model";

export class Tickets extends Model {
    static table = 'tickets';
    static fillable = [
        'folio'
    ];
}