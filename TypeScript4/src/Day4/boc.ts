import { Bank } from "./bank";

export class BOC extends Bank{
   constructor(){
        super();
    }

    public interestRate():number{
        return this.deposite*0.082;
    }
};

