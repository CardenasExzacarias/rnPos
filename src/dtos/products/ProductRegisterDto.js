export class ProductRegisterDto {
    name;
    barcode;
    unit_cost;
    unit_price;

    constructor(name, barcode, unitCost, unitPrice) {
        this.name = name;
        this.barcode = barcode;
        this.unit_cost = unitCost;
        this.unit_price = unitPrice;
    }
}