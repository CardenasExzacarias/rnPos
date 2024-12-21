import QueryBuilder from "../database/QueryBuilder";

export default class Model extends QueryBuilder {
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

    static update(fields){
        let values = [];
        let authorizedFields = [];
        console.log(fields);
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