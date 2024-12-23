import { JoinTransaction } from "../types/JoinTransaction";
import { IWhere } from "../interfaces/IWhere";

export default class QueryBuilder {
    static table: string;
    static alias: string;
    static fillable: string[];
    static searchable: string[];

    private static readonly logicalOperators: string[] = [
        '=',
        '!=',
        '||',
        '&&'
    ];

    private static sanitize(field: string): string {
        return '`' + field + '`';
    }

    private static sanitizeByDot(field: string): string {
        if (field.includes('.')) {
            const [table, column] = field.split('.');

            return '`' + table + '`.`' + column + '`';
        }

        return field;
    }

    static create(fields: any[]): any | string {
        const last = fields.length - 1;
        let columns = '';
        let columnsValues = '';

        fields.forEach((field, index) => {
            if (index < last) {
                columns += this.sanitizeByDot(field) + ', ';
                columnsValues += `?, `;
            } else {
                columns += this.sanitizeByDot(field);
                columnsValues += `?`;
            }
        });

        return `INSERT INTO ${this.table} (${columns}) VALUES (${columnsValues})`;
    }

    static get(fields: string[] = ['*']): any | string {
        const lastElement = fields.length - 1;
        let fieldsString = '';

        fields.forEach((field, index) => (
            fieldsString += lastElement !== index ?
                this.sanitizeByDot(field) + ', ' :
                this.sanitizeByDot(field)
        ));

        return `SELECT ${fieldsString} FROM `
            + '`' + this.table + '`';
    }

    static find(fields: string[] = ['*'], whereField: string): any | string {
        let query = this.get(fields);
        query += ` ${this.where(whereField)}`;

        return query;
    }

    static update(fields: any[], whereField: string): any | string {
        const last = fields.length - 1;
        let columnsValues = '';

        fields.forEach((field, index) => {
            if (index < last) {
                columnsValues += this.sanitizeByDot(field) + ' = ?, ';
            } else {
                columnsValues += this.sanitizeByDot(field) + ' = ?';
            }
        });

        return `
            UPDATE ${this.table}
            SET ${columnsValues}
            WHERE ${this.sanitizeByDot(whereField)} = ?
        `;
    }

    static select(fields: string[]): string {
        let query: string = 'SELECT ';
        let lastField = fields.length - 1;
        fields.forEach((field, index) => (
            query += lastField !== index ? `${field}, ` : `${field} `
        ));

        return query;
    }

    static from(table: string): string {
        return `FROM ${table} `;
    }

    static as(alias: string): string {
        return 'AS ' + this.sanitize(alias);
    }

    static innerJoin(join: JoinTransaction): string {
        return 'INNER JOIN ' + this.sanitize(join.join)
            + `${join.as ? this.as(join.as) : ' '}ON `
            + this.sanitizeByDot(join.onFirstTable)
            + ` ${this
                .logicalOperators
                .includes(join.operator) ?
                join.operator :
                '='
            }`
            + this.sanitizeByDot(join.onSecondTable);
    }

    static where(whereField: string): string {
        return `WHERE ${this.sanitizeByDot(whereField)} = ?`
    }
}