"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boy = void 0;
const human_1 = require("./human");
class Boy extends human_1.Human {
    constructor() {
        super();
    }
    eat() {
        console.log("Boy is Eating");
    }
}
exports.Boy = Boy;
//# sourceMappingURL=boy.js.map