class Promotions {
    static get TABLE_NAME() { return 'Promotions' };
    
    id;
    status;
    description;
    created_at;
    updated_at;

    constructor(id, status, description, created_at, updated_at) {
        this.id = id;
        this.status = status;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}