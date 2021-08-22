//  There are 3 ways to declare a JavaScript variable:

// Using var
// Using let
// Using const 

var x = 5;
var y = 6;
var z = x + y;

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter
// Names can also begin with $ and _ (but we will not use it in this tutorial)
// Names are case sensitive (y and Y are different variables)
// Reserved words (like JavaScript keywords) cannot be used as names


var carName;
console.log(carName);
//After the declaration, the variable has no value (technically it has the value of undefined).

var carName = "Volvo";

//redeclaring variable
var carName = "Volvo";
var carName;

//example
var x = "5" + 2 + 3;


//let
// The let keyword was introduced in ES6 (2015).

// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope.

let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared

{
    var x = 2;
}
// x CAN be used here


var x = 10;
// Here x is 10

{
    var x = 2;
    // Here x is 2
}

// Here x is 2

let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

// Here x is 10

// var:
//   function scoped
//   undefined when accessing a variable before it's declared

// let:
//   block scoped
//   ReferenceError when accessing a variable before it's declared

// console.log(discounted) // ❌ ReferenceError

// let discounted = []


// const is almost exactly the same as let. However, the only difference is that once you’ve assigned
// a value to a variable using const, you can’t reassign it to a new value.

let name1234 = 'Tyler'
const handle = 'tylermcginnis'

name1234 = 'Tyler McGinnis' // ✅
handle = '@tylermcginnis' // ❌ TypeError: Assignment to constant variable.



//let's go to next part: string