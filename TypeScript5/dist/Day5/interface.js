"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = void 0;
exports.printArea = printArea;
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
exports.Rectangle = Rectangle;
function printArea(shape) {
    console.log("Area: " + shape.area());
}
//# sourceMappingURL=interface.js.map