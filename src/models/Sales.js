class Sales {
    static get TABLE_NAME() { return 'sales' };

    id;
    product_id;
    ticket_id;
    product_quantity;
    unit_cost;
    unit_price;

    constructor(id, product_id, ticket_id, product_quantity, unit_cost, unit_price) {
        this.id = id;
        this.product_id = product_id;
        this.ticket_id = ticket_id;
        this.product_quantity = product_quantity;
        this.unit_cost = unit_cost;
        this.unit_price = unit_price;
    }
}