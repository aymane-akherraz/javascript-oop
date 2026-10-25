// Creation using constructors

let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${bool2}`); // -> bool2 : boolean : true


let bool1 = false;
let str = bool1.toString(); // autoboxing
let bool = bool1.valueOf(); // autoboxing
console.log(`str : ${typeof str} : ${str}`); // -> str : string : false
console.log(`bool : ${typeof bool} : ${bool}`); // -> bool : boolean : false


// conversion into primitive logical value

let bool3 = Boolean(false);
let bool4 = Boolean(1);
let bool5 = Boolean("");
console.log(`bool3 : ${typeof bool3} : ${bool3}`); // -> bool3 : boolean : false
console.log(`bool4 : ${typeof bool4} : ${bool4}`); // -> bool4 : boolean : true
console.log(`bool5 : ${typeof bool5} : ${bool5}`); // -> bool5 : boolean : false
