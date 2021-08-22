const str123 = 'Life, the universe and everything. Answer:';

console.log(`${str123} is result ${str123.length}`);
// expected output: "Life, the universe and everything. Answer: 42"
console.log('${str123} ${str123.length}');
//slice
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(3));
// expected output: "the lazy dog."

console.warn(str.slice(4, 8));
// expected output: "quick brown fox"

console.error(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

//replace 
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?

console.log(p.replaceAll('dog', 'monkey'))
    // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?








//if else condition
const time = 5
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//switch
let x = 6;
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}




// single quote and double quote
var html = '<div id="some_div"></div>'
var html = "<div id=\"some_div\"></div>"

// = and == and ===
console.log(5 == '5');
console.log(5 === '5');



//arays
let fruits = ['Apple', 'Banana', 'Peach', 'Tomato', 'Carrot']

console.log(fruits.length)
    // 5
let first = fruits[0]
    // Apple

let last_part = fruits[fruits.length - 1]
    // Carrot

let newLength = fruits.push('Orange')
    // ["Apple", "Banana", "Peach", "Tomato", "Carrot", "Orange"]

let last_part2 = fruits.pop() // remove Orange (from the end)
    // ['Apple', 'Banana', 'Peach', 'Tomato', 'Carrot']

let pos = fruits.indexOf('Banana')
    // 1

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

//concat

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


//slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const letters = ['ant', 0];
console.log(letters[1]);

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]







//filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


function isBigEnough(value) {
    return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
    // filtered is [12, 130, 44]


//   // Arrow function
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// // Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Inline callback function
// filter(function callbackFn(element) { ... })
// filter(function callbackFn(element, index) { ... })
// filter(function callbackFn(element, index, array){ ... })
// filter(function callbackFn(element, index, array) { ... }, thisArg)




const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]




//map

const array123 = [1, 4, 9, 16];

// pass a function to map
const map1 = array123.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log(array123);

const map2 = array123.map(x => x);

console.log(map2);


// you can read about some and every and reduce methods after the class yourself :)))
// Hope you enjoy it.







//objects

const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person.age);
console.log(person['age']);


const newPerson = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

personName = newPerson.fullName();
console.log(personName);






var car = [

    {

        manufacturer: "Toyota",

        vitz: ["Blue", "Hatchback"],

        corolla: ["Silver", "Sedan"],

    },

    {
        manufacturer: "Honda",
        Civic: ["White", "Hatchback"],
        city: ["Black", "Sedan"],
    }
];


console.log(car[0].vitz[1]);