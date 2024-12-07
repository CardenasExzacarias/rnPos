class Promotions {
    static get TABLE_NAME() { return 'promotions' };
    
    id;
    is_active;
    description;
    created_at;
    updated_at;

    constructor(id, is_active, description, created_at, updated_at) {
        this.id = id;
        this.is_active = is_active;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}