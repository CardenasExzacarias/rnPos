export class ProductRegisterDto {
    public name: string;
    public barcode: string;
    public unit_cost: number;
    public unit_price: number;

    constructor(name: string, barcode: string, unitCost: number, unitPrice: number) {
        this.name = name;
        this.barcode = barcode;
        this.unit_cost = unitCost;
        this.unit_price = unitPrice;
    }
}