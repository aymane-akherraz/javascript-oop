let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }
};

let circle2 = { ...circle1 };
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circle2); // false
console.log(circle1.center === circle2.center); // true !
circle1.center.x = 0;
console.log(circle2.center.x); // 0