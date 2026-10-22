import { figure } from "./test.js";

let circle = Object.create(figure)
circle.type = "circle";
circle.center = { x: 0, y: 0 };
circle.radius = 100;
console.log(circle.getType());
