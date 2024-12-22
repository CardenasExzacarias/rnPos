import Model from "./Model";

export class Tickets extends Model {
    static table: string = 'tickets';
    static alias: string = 't';
    static fillable: string[] = [
        'folio'
    ];
}