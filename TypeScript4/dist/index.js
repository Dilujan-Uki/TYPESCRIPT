"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./Day4/bank");
const boc_1 = require("./Day4/boc");
const boy_1 = require("./Day4/boy");
const hnb_1 = require("./Day4/hnb");
const people_1 = require("./Day4/people");
function main() {
    const obj = new boy_1.Boy();
    obj.eat();
}
main();
function bank() {
    const bankObj = new bank_1.Bank();
    const bocObj = new boc_1.BOC();
    const hnbObj = new hnb_1.HNB();
    const peopleObj = new people_1.People();
    console.log("How much if I deposite " + bankObj.deposite + " LKR in each bank");
    console.log("I'll get " + bankObj.interestRate() + " in genral");
    console.log("I'll get " + bocObj.interestRate() + " in BOC");
    console.log("I'll get " + hnbObj.interestRate() + " in HNB");
    console.log("I'll get " + peopleObj.interestRate() + " in People's");
}
bank();
//# sourceMappingURL=index.js.map