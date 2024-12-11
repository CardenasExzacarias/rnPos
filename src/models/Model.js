import { QueryBuilder } from "../database/QueryBuilder";

export class Model extends QueryBuilder {
    static create(fields) {
        let values = [];
        let authorizedFields = [];
        for (const field in fields) {
            if (this.fillable.includes(field)) {
                values.push(fields[field]);
                authorizedFields.push(field);
            }
        }

        const query = super.create(authorizedFields);

        return { query, values };
    }
}