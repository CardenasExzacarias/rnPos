export class ProductsProvidersRegisterDto {
    product_id;
    provider_id;

    constructor(product_id, provider_id) {
        this.product_id = product_id;
        this.provider_id = provider_id;
    }
}