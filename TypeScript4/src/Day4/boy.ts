import { Human } from "./human";

export class Boy extends Human{
    constructor(){
        super();
    }

    public eat():void{
        console.log("Boy is Eating");
    }
}