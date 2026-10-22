let person = {
    firstName: "John",
    lastName: "Doe"
};

Object.defineProperties(person, {
    // Property 1: Completely locked down
    "_age": {
        value: 30,
        writable: false,
        enumerable: false,
        configurable: false // <-- Locked! Cannot delete or redefine.
    },
    // Property 2: Left configurable
    "status": {
        value: "active",
        writable: true,
        enumerable: true,
        configurable: true  // <-- Unlocked! Can be changed later.
    }
});

console.log(Object.getOwnPropertyNames(person));


Object.preventExtensions(person);
person.nickname = "The philosopher";

console.log(Object.isExtensible(person))
console.log(Object.getOwnPropertyNames(person));

Object.seal(person);
delete person.status;

console.log(Object.isSealed(person));
console.log(Object.getOwnPropertyNames(person));

Object.freeze(person);
person.firstName = "Jim"

console.log(Object.isFrozen(person));
console.log(person.firstName)
