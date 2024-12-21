import QueryBuilder from "../database/QueryBuilder";
import { IModelCrud } from "../interfaces/IModelCrud";

export default class Model extends QueryBuilder {
    static create(fields: any): IModelCrud {
        let values: any[] = [];
        let authorizedFields: string[] = [];
        
        for (const field in fields) {
            if (this.fillable.includes(field)) {
                values.push(fields[field]);
                authorizedFields.push(field);
            }
        }

        const query = super.create(authorizedFields);

        return { query, values };
    }

    static update(fields: any): IModelCrud {
        let values: any[] = [];
        let authorizedFields: string[] = [];

        for (const field in fields) {
            if (this.fillable.includes(field)) {
                values.push(fields[field]);
                authorizedFields.push(field);
            }
        }

        values.push(fields.where.value);

        const query = super.update(authorizedFields, fields.where.field);

        return { query, values };
    }
}