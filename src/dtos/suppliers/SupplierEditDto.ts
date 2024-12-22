import { IWhere } from "../../interfaces/IWhere";

export default class SupplierEditDto {
    public name: string;
    public phone: string;
    public email: string;
    public where: IWhere;

    constructor(name: string, phone: string, email: string, where: IWhere) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.where = where;
    }
}