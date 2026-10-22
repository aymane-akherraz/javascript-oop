// The effect of using new Object() will be the same as {}.

let emptyObject = new Object();
console.log(emptyObject.constructor.name);


let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name);
