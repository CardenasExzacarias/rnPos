export class ProductsProvidersRegisterDto {
    public product_id: number;
    public provider_id: number;

    constructor(productId: number, providerId: number) {
        this.product_id = productId;
        this.provider_id = providerId;
    }
}