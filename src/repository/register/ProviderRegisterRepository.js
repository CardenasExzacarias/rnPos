import Providers from "../../models/Providers";

export class ProviderRegisterRepository {
    static create(ProviderRegisterDto) {
        return Providers.create(ProviderRegisterDto);
    }
}