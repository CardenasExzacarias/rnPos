class Providers {
    static get TABLE_NAME() { return 'Providers' };
    
    id;
    name;
    phone;
    email;
    created_at;
    updated_at;

    constructor(id, name, phone, email, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}