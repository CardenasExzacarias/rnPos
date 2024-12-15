export default class QueryBuilder {
    static table;
    static fillable;

    static create(fields) {
        const last = fields.length - 1;
        let columns = '';
        let columnsValues = '';

        fields.forEach((field, index) => {
            if (index < last) {
                columns += '`' + field + '`, ';
                columnsValues += `?, `;
            } else {
                columns += '`' + field + '`';
                columnsValues += `?`;
            }
        });

        return `INSERT INTO ${this.table} (${columns}) VALUES (${columnsValues})`;
    }

    static get(fields = ['*']) {
        const lastElement = fields.length - 1;
        let fieldsString = '';

        fields.forEach((field, index) => (
            fieldsString += lastElement !== index ? `${field}, ` : field
        ));

        return `select ${fieldsString} from ${this.table}`;
    }
}