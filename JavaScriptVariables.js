// javaScript variables are used to store data values, thhere r 3 keywords used to declare variables:
// (1)var (2)let and (3)const

/*------------var-----------

1. variables declared with var r function-scoped or globally scoped.
2. they can be reassigned and redeclared within its scope. (weakness)*/
var x = 5
var y = 10
x = 20 // reassignment
var x = 30 // redeclaration
console.log(x)


/*------------let-----------
1. Variables declared with let r block-scoped.
2. they can be reassigned within its block scope, but cannot be redeclared in the same scope.*/