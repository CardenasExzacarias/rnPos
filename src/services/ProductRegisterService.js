import { Products } from "../models/Products";

export default class ProductRegisterService{
    static create(ProductRegisterDto){
        const {providerId, ...product} = ProductRegisterDto;
        const { query, values } = Products.create(product);

        console.log(providerId, query, values);
    }
}