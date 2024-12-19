import Model from "./Model";

export class ProductsProviders extends Model {
    static table = 'products_providers';
    static fillable = [
        'product_id',
        'provider_id'
    ];

    id;
    product_id;
    provider_id;
}