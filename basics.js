// Data Types
/*

-------------------------------> Number

The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
*/
let n = 123; // n is now an integer number
n = 12.345; // now n is a floating point number

/*
Besides regular numbers,
there are so-called “special numeric values”
which also belong to this data type:--> Infinity, -Infinity and NaN.

Infinity represents the mathematical Infinity ∞.
It is a special value that’s greater than any number.

We can get it as a result of division by zero:
*/
alert( 1 / 0 ); // Infinity

//Or just reference it directly:

alert( Infinity ); // Infinity

/*
NaN represents a computational error.
 It is a result of an incorrect or an undefined mathematical operation, for instance:

alert( "not a number" / 2 ); // NaN, such division is erroneous

NaN is sticky. Any further mathematical operation on NaN returns NaN:
*/
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

//So, if there’s a NaN somewhere in a mathematical expression,
// it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

/*
Mathematical operations are safe
Doing maths is “safe” in JavaScript. We can do anything: divide by zero,
treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.

Special numeric values formally belong to the “number” type.
Of course, they are not numbers in the common sense of this word.

 */

/*

--------------------------------------> BigInt

In JavaScript, the “number” type cannot safely represent integer values larger than (2 ** 53-1)
 (that’s 9007199254740991), or less than -(2 ** 53-1) for negatives.

To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308),
but outside  the safe integer range ±(2 ** 53-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage.
So an “approximate” value may be stored.
*/

//For example, these two numbers (right above the safe range) are the same:

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

/*
So to say, all odd integers greater than (2 ** 53-1) can’t be stored at all in the “number” type.

For most purposes ±(2 ** 53-1) range is quite enough, but sometimes we need the entire range of
huge integers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.
*/

//A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

console.log(bigInt); // 1234567890123456789012345678901234567890n


//----------------------------------> String

// A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(str); // Hello
console.log(str2); // Single quotes are ok too
console.log(phrase); // can embed another Hello

/*
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
Double and single quotes are “simple” quotes.
There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes.
They allow us to embed variables and expressions into a string by wrapping them in ${…},
for example:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
The expression inside ${…} is evaluated and the result becomes a part of the string.
We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

Please note that this can only be done in backticks.
Other quotes don’t have this embedding functionality!

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
 */

/*
-----------------------------> Boolean (logical type)
The boolean type has only two values: true and false.

This type is commonly used to store yes/no values:
true means “yes, correct”, and false means “no, incorrect”.
*/
//For instance:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

/*
Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")
 */

/*

------------------> The “null” value
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

let age = null;
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer”
like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

The code above states that age is unknown.
 */

/*
-------------------------------> The “undefined” value
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned yet”.

If a variable is declared, but not assigned, then its value is undefined:

*/
let age;
alert(age); // shows "undefined"

/* Technically, it is possible to explicitly assign undefined to a variable:

let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"
…But we don’t recommend doing that. Normally,
one uses null to assign an “empty” or “unknown” value to a variable,
while undefined is reserved as a default initial value for unassigned things.
 */

/*
------------------------------------> Objects and Symbols
The object type is special.

All other types are called “primitive” because their values can contain only a single thing
 (be it a string or a number or whatever). In contrast, objects are used to store,
  collections of data and more complex entities.

Being that important, objects deserve a special treatment.


The symbol type is used to create unique identifiers for objects.

 */

/*
The typeof operator
The typeof operator returns the type of the operand.
It’s useful when we want to process values of different types differently or
 just want to do a quick check.

A call to typeof x returns a string with the type name:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
 */

/*
--------------------------------->  Summary
There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(2 ** 53-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.

And one non-primitive data type:-
object for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
 */