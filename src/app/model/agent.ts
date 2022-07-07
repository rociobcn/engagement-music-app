import { FullName } from "./full-name";

export class Agent {
    constructor(
        public fullName:FullName, 
        public email: string,
        public username:string,
        public password: string,
        public picture: string,
        public dni: string,
        public phone: number,
        public position: string
    ){}
        
   
}
