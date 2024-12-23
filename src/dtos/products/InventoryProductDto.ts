export class InventoryProductDto {
    public id: number;
    public name: string;
    public unit_price: number;
    public quantity: number;

    constructor(id: number, name: string, unitPrice: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.unit_price = unitPrice;
        this.quantity = quantity;
    }
}