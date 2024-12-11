export default class ProductRegisterDto {
    name;
    barcode;
    unit_cost;
    unit_price;
    providerId;

    constructor(name, barcode, unitCost, unitPrice, providerId) {
        this.name = name;
        this.barcode = barcode;
        this.unit_cost = unitCost;
        this.unit_price = unitPrice;
        this.providerId = providerId;
    }
}