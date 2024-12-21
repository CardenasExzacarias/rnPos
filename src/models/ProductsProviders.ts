import Model from "./Model";

export class ProductsProviders extends Model {
    static table: string = 'products_providers';
    static fillable: string[] = [
        'product_id',
        'provider_id'
    ];
}