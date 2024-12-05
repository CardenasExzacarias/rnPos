class Sells {
    static get TABLE_NAME() { return 'Sells' };

    id;
    product_id;
    ticket_id;
    quantity;
    unit_cost;
    unit_price;

    constructor(id, product_id, ticket_id, quantity, unit_cost, unit_price) {
        this.id = id;
        this.product_id = product_id;
        this.ticket_id = ticket_id;
        this.quantity = quantity;
        this.unit_cost = unit_cost;
        this.unit_price = unit_price;
    }
}