import { Instrument } from "../enum/instrument";
import { FullName } from "./full-name";

export class Member {
    constructor(public fullName: FullName, public instrument: Instrument, public single: boolean) {
    }
}
