class Products {
    static get TABLE_NAME() { return 'products' };

    id;
    name;
    barcode;
    unit_cost;
    unit_price;
    created_at;
    updated_at;

    constructor(id, name, barcode, unit_cost, unit_price, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.barcode = barcode;
        this.unit_cost = unit_cost;
        this.unit_price = unit_price;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}