// javaScript variables are used to store data values, thhere r 3 keywords used to declare variables:
// (1)var (2)let and (3)const

/*------------var-----------

1. variables declared with var r function-scoped or globally scoped.
2. they can be reassigned and redeclared within its scope. (weakness)*/

var x = 5;
var y = 10;
x = 20; // reassignment
var x = 30; // redeclaration
console.log(x);

/*------------let-----------
1. Variables declared with let r block-scoped.
2. they can be reassigned within its block scope, but cannot be redeclared in the same scope.*/

let a = 5;
a = 10; // reassignment
// let a = 15; // error: identifier 'a' has already been declared, so cannot be redeclared

console.log(a);

/*------------const-----------
1. variables declared with const r also block-scoped.
2. they must be initialized with a value and  -------cannot be reassigned once assigned--------- (power)
3. for objects and arrays declared with const, their properties or elements can still be modified.*/

const PI = 3.14;
// PI = 3.14159; // errror: cannot be reassigned
const person = {
  name: "arnob",
  age: 22,
};
person.age = 23; // valid: Modifying object properties (point [3])
