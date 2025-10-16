"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
const bank_1 = require("./bank");
class People extends bank_1.Bank {
    constructor() {
        super();
    }
    interestRate() {
        return this.deposite * 0.079;
    }
}
exports.People = People;
;
//# sourceMappingURL=people.js.map