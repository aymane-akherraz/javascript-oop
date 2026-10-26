
let strings = [undefined, "", "ab", "cd ef", 4, null];

for (let i = 0; i < strings.length; i++) {
    if (strings[i] && strings[i].length)
        console.log(strings[i]);
}

// Case conversion

let title = "The perfect string";
console.log(title.toUpperCase());
console.log(title);
console.log(title.toLowerCase());


// Splitting the string

let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127


// Replacing substrings

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30
console.log(words);


// Searching for substrings

text = "One, two, three, one, two, three.";
console.log(text.includes("two")); // -> true
console.log(text.includes("four")); // -> false
console.log(text.indexOf("two")); // -> 5
console.log(text.indexOf("four")); // -> -1
console.log(text.lastIndexOf("two")); // -> 22


// Copying substrings

text = "One, two, three, one, two, three.";
console.log(text.substr(0,8)); // -> One, two
console.log(text.substr(10)); // -> three, one, two, three.
console.log(text.substr(-6)); // -> three.
console.log(text.substr(-6, 2)); // -> th

console.log(text.substring(5, 8)); // -> two
console.log(text.substring(5)); // -> two, three, one, two, three.
console.log(text.substring(-11, 8)); // -> One, two

console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three.
console.log(text.slice(-11, -8)); // -> two


// Padding

let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}


// Trimming

let city = " Bergen  ";
let street = " Dokkeboder";
console.log(`${city.trimStart().length} : "${city.trimStart()}"`); // -> 8 -> "Bergen  "
console.log(`${city.trimEnd().length} : "${city.trimEnd()}"`); // -> 7 -> " Bergen"
console.log(`${city.trim().length} : "${city.trim()}"`); // -> 6 -> "Berge"
console.log(`${street.trim().length} : "${street.trim()}"`); // -> 10 -> "Dokkeboder"


// Comparing strings

console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true
