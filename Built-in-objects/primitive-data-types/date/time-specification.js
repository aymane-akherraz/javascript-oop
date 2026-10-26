let date1 = new Date("2020-02-02T20:20:00.000");
let date2 = new Date("2020-02-02T20:20:00.000Z");

console.log(date1.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date1.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date1.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date2.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date2.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date2.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date1.getTime());
console.log(date2.getTime()); // -> 1580674800000
console.log(date2.getTime() - date1.getTime());


let date3 = new Date(2020, 6);
let date4 = new Date(2020, 6, 8);
let date5 = new Date(2020, 6, 8, 10);
let date6 = new Date(2020, 6, 8, 10, 20, 45);

console.log(date3.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date5.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date6.toLocaleString()); // -> 08/07/2020, 10:20:45

date1 = new Date("Mon Mar 02 2020 10:00:00");
date2 = new Date("Mon March 2 2020 10:00");
date3 = new Date("Mar 02 2020 10:00:00");
date4 = new Date("2 March 2020, 10:");
date5 = new Date("3.2.2020");
date6 = Date("03/02-2020, 10:00");
let date7 = new Date("2020, 10:00");
let date8 = new Date("2020 march-02, 10:00");
let date9 = new Date("3.2.2020 GMT+0400");
let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7);
console.log(date8);
console.log(date9);
console.log(date10);
