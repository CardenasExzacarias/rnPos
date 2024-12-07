class ProductsPromotions {
    static get TABLE_NAME() { return 'products_promotions' };

    id;
    product_id;
    promotions_id;

    constructor(id, products_id, promotions_id) {
        this.id = id;
        this.product_id = products_id;
        this.promotions_id = promotions_id;
    }
}