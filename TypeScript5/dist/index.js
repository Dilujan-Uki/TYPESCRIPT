"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./Day5/interface");
function interFace() {
    const cir = new interface_1.Circle(4);
    const rec = new interface_1.Rectangle(4, 5);
    console.log("Area: " + cir.PrintArea());
    console.log("Area: " + rec.printArea());
}
interFace();
//# sourceMappingURL=index.js.map