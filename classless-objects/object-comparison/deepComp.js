const deepComp = (a, b) => {
    if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
        return a === b;
    }

    const keys = [Object.keys(a), Object.keys(b)];

    if (keys[0].length !== keys[1].length)
        return false;

    for (let i = 0; i < keys[0].length; i++) {
        if (typeof a[keys[0][i]] === "object" && typeof b[keys[1][i]] === "object") {
            if (!deepComp(a[keys[0][i]], b[keys[1][i]]))
                return false;
        }
        else if (a[keys[0][i]] !== b[keys[1][i]]) {
            return false;
        }
    }
    return true;
};

let a = { x: [1, 2, 3, 4, 5], y: 0, z: { m: 'test', n: false } };
let b = { x: [1, 2, 3, 4, 5], y: 0, z: { m: 'test', n: false } };
let c = { x: [1, 2, 3, 4, 5, 6], y: 0, z: { m: 'test', n: false } };
let d = { x: [1, 2, 3, 4], y: 0, z: { m: 'test', n: false } };
let e = { x: [1, 2, 3, 4, 5], y: 0, z: { m: 'test', n: true } };
let f = { x: [1, 2, 3, 4, 5], y: -1, z: { m: 'test', n: false } };

console.log(deepComp(a, b));
console.log(deepComp(a, c));
console.log(deepComp(a, d));
console.log(deepComp(a, e));
console.log(deepComp(a, f));
console.log(deepComp(10, a));
console.log(deepComp(10, "10"));
console.log(deepComp(null, null));
console.log(deepComp(null, undefined));
