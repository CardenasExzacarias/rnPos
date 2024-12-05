class Discounts {
    static get TABLE_NAME() { return 'Discounts' };

    id;
    mount;
    ticket_id;

    constructor(id, mount, ticket_id) {
        this.id = id;
        this.mount = mount;
        this.ticket_id = ticket_id;
    }
}