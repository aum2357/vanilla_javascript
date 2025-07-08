/*
-----------------------> Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them.

Remainder %
The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.

For instance:

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4
-> Exponentiation **
The exponentiation operator a ** b raises a to the power of b.

In school maths, we write that as a ^ b.

F
Just like in maths, the exponentiation operator is defined for non-integer numbers as well.
*/


alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
//For example, a square root is an exponentiation by ½:
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

/*
------------------> String concatenation with binary +

Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
alert(s); // mystring
Note that if any of the operands is a string, then the other one is converted to a string too.

See, it doesn’t matter whether the first operand is a string or the second one.

Here, operators work one after another.
 The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it,
  so it’s like 4 + '1' = '41'.


Here, the first operand is a string,
the compiler treats the other two operands as strings too.
The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

The binary + is the only operator that supports strings in such a way.


alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
*/
//Other arithmetic operators work only with numbers and always convert their operands to numbers.

//Here’s the demo for subtraction and division:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

/*
----------------------> Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
It actually does the same thing as Number(...), but is shorter.
 */
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5


/*
-------------------> Chaining assignments
Another interesting feature is the ability to chain assignments:
*/

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
