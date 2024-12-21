import { IWhere } from "../interfaces/IWhere";

export default class QueryBuilder {
    static table: string;
    static fillable: string[];

    static create(fields: any[]): any | string {
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

    static get(fields: string[] = ['*']): any | string {
        const lastElement = fields.length - 1;
        let fieldsString = '';

        fields.forEach((field, index) => (
            fieldsString += lastElement !== index ? `${field}, ` : field
        ));

        return `select ${fieldsString} from ${this.table}`;
    }

    static update(fields: any[], where: IWhere): any | string {
        const last = fields.length - 1;
        let columnsValues = '';

        fields.forEach((field, index) => {
            if (index < last) {
                columnsValues += '`' + field + '` = ?, ';
            } else {
                columnsValues += '`' + field + '` = ?';
            }
        });

        return `
            UPDATE ${this.table}
            SET ${columnsValues}
            WHERE ${'`' + where + '`'} = ?
        `;
    }
}