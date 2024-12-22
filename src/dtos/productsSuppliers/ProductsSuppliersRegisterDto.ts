export class ProductsSuppliersRegisterDto {
    public product_id: number;
    public supplier_id: number;

    constructor(productId: number, supplierId: number) {
        this.product_id = productId;
        this.supplier_id = supplierId;
    }
}