class Debts {
    static get TABLE_NAME() { return 'debts' };

    id;
    debtor;
    mount;
    is_paid;
    ticket_id;
    created_at;
    updated_at;

    constructor(id, debtor, mount, is_paid, ticket_id, created_at, updated_at) {
        this.id = id;
        this.debtor = debtor;
        this.mount = mount;
        this.is_paid = is_paid;
        this.ticket_id = ticket_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}