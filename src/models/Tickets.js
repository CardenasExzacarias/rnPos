class Tickets {
    static get TABLE_NAME() { return 'tickets' };
    
    id;
    folio;
    created_at;
    updated_at;

    constructor(id, folio, created_at, updated_at){
        this.id = id;
        this.folio = folio;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}