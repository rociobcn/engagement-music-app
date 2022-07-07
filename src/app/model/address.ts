export class Address {
    constructor(
        private _street: string,
        private _city: string,
        private _country: string,
        private _postalCode: string
    ){}
    public get street(): string {
        return this._street;
    }
    public get city(): string {
        return this._city;
    }
    public get country(): string {
        return this._country;
    }
    public get postalCode(): string {
        return this._postalCode;
    }
    public set street(value: string) {
        this._street = value;
    }
    public set city(value: string) {
        this._city = value;
    }
    public set country(value: string) {
        this._country = value;
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    
}
