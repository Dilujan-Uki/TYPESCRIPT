import { Bank } from "./bank";

export class People extends Bank{
   constructor(){
        super();
    }

    public interestRate():number{
        return this.deposite*0.079;
    }
};

