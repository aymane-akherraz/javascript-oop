import { figure, circle } from "./test.js";

let point = { x: 0, y: 0 };
let coloredPoint = { color: "red" };

coloredPoint.__proto__ = point; // Set point as the prototype of coloredPoint

console.log(Object.getOwnPropertyNames(coloredPoint)); // -> [ 'color' ]
console.log(coloredPoint.color); // -> red
console.log(coloredPoint.x); // -> 0
console.log(coloredPoint.y); // -> 0


coloredPoint.x = 100;   // new property
console.log(coloredPoint.x); // -> 100
console.log(point.x); // 0
console.log(Object.getOwnPropertyNames(coloredPoint)); // -> [ 'color', 'x' ]

point.y = 200;
console.log(coloredPoint.y); // -> 200
console.log(point.y); // -> 200


circle.__proto__ = figure; // Set figure as the prototype of circle

console.log(figure.getType()); // -> unknown
console.log(circle.getType()); // -> circle
