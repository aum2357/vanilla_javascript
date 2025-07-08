/*
The operator is represented by a question mark ?.
Sometimes it’s called “ternary”, because the operator has three operands.
 It is actually the one and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

 */
//For example:

let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed); // true if age > 18, otherwise false