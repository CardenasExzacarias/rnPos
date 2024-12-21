export default class ProviderRegisterDto {
    public name: string;
    public phone: string;
    public email: string;
    
    constructor(name: string, phone: string, email: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}