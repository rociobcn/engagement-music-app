export class User {
    constructor(public username:string, public password:string){}

    public getUsername():string{
        return this.username;
    }
    public getPassword():string{
        return this.password;
    }
    public setUsername(username:string){
        this.username = username;
    }
    public setPassword(password:string){
        this.password = password;
    }
}
