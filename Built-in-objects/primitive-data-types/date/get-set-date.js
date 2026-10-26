let date = new Date("2020-07-08T10:20:00");

console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12
