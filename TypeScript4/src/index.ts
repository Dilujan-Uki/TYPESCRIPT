import { Bank } from "./Day4/bank";
import { BOC } from "./Day4/boc";
import { Boy } from "./Day4/boy";
import { HNB } from "./Day4/hnb";
import { Human } from "./Day4/human";
import { People } from "./Day4/people";

function main(){
    const obj=new Boy();
    obj.eat();
}
main();

function bank(){
     const bankObj= new Bank();   
     const bocObj= new BOC();   
     const hnbObj= new HNB(); 
     const peopleObj= new People();
      
    console.log("How much if I deposite "+bankObj.deposite+" LKR in each bank");
    console.log("I'll get "+bankObj.interestRate()+" in genral");    
    console.log("I'll get "+bocObj.interestRate()+" in BOC");
    console.log("I'll get "+hnbObj.interestRate()+" in HNB");
    console.log("I'll get "+peopleObj.interestRate()+" in People's");

}
bank();


