let nowObj = new Date();

console.log(nowObj.toLocaleString());

let now = Date.now(); // timestamp
let nowObj2 = new Date(now);

console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj2} : ${nowObj2}`);
