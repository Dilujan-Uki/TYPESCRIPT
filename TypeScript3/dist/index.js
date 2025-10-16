"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./Day3/circle");
const rectangle_1 = require("./Day3/rectangle");
console.log("Circle Example");
const cir = new circle_1.Circle(5, 'blue', true);
cir.printCircle();
console.log("Area:", Math.floor(cir.getArea()));
console.log("Perimeter:", Math.floor(cir.getPerimeter()));
console.log(cir.toString());
console.log("\n Rectangle Example");
const rec = new rectangle_1.Rectangle(4, 6, "red", false);
console.log("Area:", rec.getArea());
console.log("Perimeter:", rec.getPerimeter());
console.log(rec.toString());
//# sourceMappingURL=index.js.map