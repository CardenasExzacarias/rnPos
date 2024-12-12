import Providers from "../../models/Providers";

export default class ProviderRegisterService {
    static create(ProviderRegisterDto) {
        const { query, values } = Providers.create(ProviderRegisterDto);

        console.log(query, values);
    }
}