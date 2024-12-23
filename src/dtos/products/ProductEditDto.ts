import { IWhere } from "../../interfaces/IWhere";

export class ProductEditDto {
    public name: string;
    public barcode: string;
    public unit_cost: number;
    public unit_price: number;
    public quantity: number;
    public where: IWhere;

    constructor(
        name: string,
        barcode: string,
        unitCost: number,
        unitPrice: number,
        quantity: number,
        where: IWhere
    ) {
        this.name = name;
        this.barcode = barcode;
        this.unit_cost = unitCost;
        this.unit_price = unitPrice;
        this.quantity = quantity;
        this.where = where;
    }
}