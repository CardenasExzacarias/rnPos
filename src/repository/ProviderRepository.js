import { Providers } from "../models/Providers";

export class ProviderRepository {
    static create(ProviderRegisterDto) {
        return Providers.create(ProviderRegisterDto);
    }

    static getAll(fields = ['*']){
        return Providers.get(fields);
    }
}