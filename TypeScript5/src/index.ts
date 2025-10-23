
import { Circle, Rectangle,printArea } from "./Day5/interface";


function interFace(){
    const cir=new Circle(4);
    const rec=new Rectangle(4,5);
  
    printArea(cir);
    printArea(rec);

}
interFace();
