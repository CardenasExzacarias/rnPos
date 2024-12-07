class ProductsProviders {
    static get TABLE_NAME() { return 'products_providers' };
    
    id;
    product_id;
    provider_id;

    constructor(id, products_id, providers_id) {
        this.id = id;
        this.product_id = products_id;
        this.provider_id = providers_id;
    }
}