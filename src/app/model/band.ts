import { Genre } from "../enum/genre";
import { FullName } from "./full-name";

export class Band {
    constructor(
         public fullName:FullName, 
         public email: string,
         public username:string,
         public password: string,
         public picture: string,
         public dni: string,
         public phone: number,
         public genre: Genre,
         public nameOfGroup: string,
         public priceHour: number
    ){}
   
    

    
}
