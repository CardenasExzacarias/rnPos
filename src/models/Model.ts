import QueryBuilder from "../database/QueryBuilder";
import { IModelCrud } from "../interfaces/IModelCrud";
import { IWhere } from "../interfaces/IWhere";
import { ValidateDto } from "../types/ModelTypes";

export default class Model extends QueryBuilder {
    static validateFieldsByArray(fields: string[], validator: string[]): string[] {
        const authorizedFields: string[] = [];

        fields.forEach((field) => {
            if (validator.includes(field)) {
                authorizedFields.push(field);
            }

            if (field.includes('.')) {
                const [table, column] = field.split('.');
                if (table === this.alias && validator.includes(column)) {
                    authorizedFields.push(field);
                }
            }
        });

        return authorizedFields;
    }

    static validateDto(fields: any, validator: string[]): ValidateDto {
        const authorizedFields: string[] = [];
        const values: any[] = [];
        for (const field in fields) {
            if (validator.includes(field)) {
                values.push(fields[field]);
                authorizedFields.push(field);
            }
        }

        return { authorizedFields, values };
    }

    static create(fields: any): IModelCrud {
        const { authorizedFields, values } = this.validateDto(fields, this.fillable);

        const query = super.create(authorizedFields);

        return { query, values };
    }

    static get(fields: string[] = ['*']) {
        const authorizedFields: string[] = this.validateFieldsByArray(fields, this.searchable);
        return super.get(authorizedFields);
    }

    static find(fields: string[] = ['*'], where: IWhere): IModelCrud {
        const authorizedFields: string[] = this.validateFieldsByArray(fields, this.searchable);
        const query = super.find(authorizedFields, where.field);
        return { query, values: [where.value] }
    }

    static update(fields: any): IModelCrud {
        const { authorizedFields, values } = this.validateDto(fields, this.fillable);

        values.push(fields.where.value);

        const query = super.update(authorizedFields, fields.where.field);

        return { query, values };
    }
}