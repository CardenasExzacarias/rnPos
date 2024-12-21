import Model from "./Model";

export class Tickets extends Model {
    static table: string = 'tickets';
    static fillable: string[] = [
        'folio'
    ];
}