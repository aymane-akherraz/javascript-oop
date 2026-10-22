//  Create an object without a prototype

let reallyEmptyObject = Object.create(null);
console.log(reallyEmptyObject)
console.log(typeof reallyEmptyObject.constructor); // -> undefined
