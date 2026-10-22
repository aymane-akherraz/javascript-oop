import { figure, circle } from "./test.js";


Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType()); // -> circle
