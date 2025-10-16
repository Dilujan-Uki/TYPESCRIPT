import { Circle } from "./Day3-Polymorphism/circle";
import { Rectangle } from "./Day3-Polymorphism/rectangle";
console.log("Circle Example");
const cir = new Circle(5, 'blue', true);
cir.printCircle();
console.log("Area:",Math.floor( cir.getArea()));
console.log("Perimeter:", Math.floor(cir.getPerimeter()));
console.log(cir.toString());
console.log("\n Rectangle Example");
const rec = new Rectangle(4, 6, "red", false);
console.log("Area:", rec.getArea());
console.log("Perimeter:", rec.getPerimeter());
console.log(rec.toString());


