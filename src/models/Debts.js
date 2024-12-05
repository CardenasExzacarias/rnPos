class Debts {
    static get TABLE_NAME() { return 'Discounts' };

    id;
    debtor;
    mount;
    status;
    ticket_id;
    created_at;
    updated_at;

    constructor(id, debtor, mount, status, ticket_id, created_at, updated_at) {
        this.id = id;
        this.debtor = debtor;
        this.mount = mount;
        this.status = status;
        this.ticket_id = ticket_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}