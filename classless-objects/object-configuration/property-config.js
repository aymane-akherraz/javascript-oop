let contact = {
    _age: 36,
    firstName: "David",
    lastName: "Taylor",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    get age() { return this._age; },
    set age(a) { if (a > 0) this._age = a; }
};

let keys = Object.keys(contact);
console.log(keys);

let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc);

let person = {};
Object.defineProperty(person, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.keys(person);
console.log(person._age); // 36

if ("_age" in person)
    console.log(person._age); // 36

for (let key in person)
    console.log(key) // This will not show anything because enumerable is set to false

console.log(Object.keys(person)) // []
console.log(Object.getOwnPropertyNames(person)); // [ '_age' ]

Object.defineProperty(person, "_age", {
    value: person._age,
    writable: false,
    enumerable: false,
    configurable: true
});
person._age = 100; // This fails silently
console.log(person._age);

Object.defineProperty(person, "_age", {
    value: person._age,
    writable: false,
    enumerable: false,
    configurable: false
});

delete person._age;
console.log(person._age); // 36

Object.defineProperty(person, "_age", {
    value: person._age,
    writable: false,
    enumerable: true, // TypeError: Cannot redefine property: _age
    configurable: false
});
