import { QueryBuilder } from "../database/QueryBuilder";

export class Model extends QueryBuilder {
    static insert(fields) {
        let authorizedValues = [];
        let authorizedFields = [];
        for (const field in fields) {
            if (this.fields.includes(field)) {
                authorizedValues.push(fields[field]);
                authorizedFields.push(field);
            }
        }

        const query = super.insert(authorizedFields);

        return { query, authorizedValues };
    }
}