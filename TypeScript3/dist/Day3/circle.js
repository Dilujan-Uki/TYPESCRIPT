"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const geometric_1 = require("./geometric");
class Circle extends geometric_1.Geometric {
    radius;
    constructor(radius, color, filled) {
        super();
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    printCircle() {
        console.log("Circle radius is :" + this.radius);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map