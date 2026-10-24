let AlmostEmpty = function (sth) {
    console.log(sth);
};

AlmostEmpty.prototype.sayHi = function () {
    console.log("Hi!");
};

class ExtendedClass extends AlmostEmpty {
    constructor(name) {
        super("I'm super ...");
        this.name = name;
    };
    sayHi() {
        console.log(`Hi ${this.name}!`);
    };
};

let obj = new ExtendedClass("Bob");
obj.sayHi();    // -> Hi Bob!
