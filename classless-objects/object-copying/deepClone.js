let deepClone = function (obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let newObj = Array.isArray(obj) ? [...obj] : { ...obj };

    for (let property in newObj) {
        if (typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}

const simple = { name: "Alice", age: 30 };
const cloneSimple = deepClone(simple);
cloneSimple.age = 31;
console.log("Original Age:", simple.age);
console.log("Cloned Age:", cloneSimple.age);

const nested = { user: { location: { city: "Paris" } } };
const cloneNested = deepClone(nested);
cloneNested.user.location.city = "London";
console.log("Original City:", nested.user.location.city);
console.log("Cloned City:", cloneNested.user.location.city);

const withArray = { scores: [10, 20, 30] };
const cloneArray = deepClone(withArray);
console.log("Is cloned scores an array?:", Array.isArray(cloneArray.scores));
console.log("Cloned scores content:", cloneArray.scores);

const withNull = { data: null };
const cloneNull = deepClone(withNull);
console.log("Original null:", withNull.data);
console.log("Cloned null value:", cloneNull.data);
