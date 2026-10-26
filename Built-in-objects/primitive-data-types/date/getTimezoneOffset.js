let date1 = new Date(0);
let date2 = new Date(1000 * 60 * 60 * 10);

console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT
