import { Bank } from "./bank";

export class HNB extends Bank{
   constructor(){
        super();
    }

    public interestRate():number{
        return this.deposite*0.073;
    }
};

