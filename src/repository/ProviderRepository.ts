import ProviderEditDto from "../dtos/providers/ProviderEditDto";
import ProviderRegisterDto from "../dtos/providers/ProviderRegisterDto";
import { Providers } from "../models/Providers";

export class ProviderRepository {
    static create(dto: ProviderRegisterDto) {
        return Providers.create(dto);
    }

    static getAll(fields: any[] = ['*']) {
        return Providers.get(fields);
    }

    static update(dto: ProviderEditDto) {
        return Providers.update(dto);
    }
}