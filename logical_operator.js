/*
---------> Logical operators
There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

 */

// OR "||" finds the first truthy value
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value

// AND “&&” finds the first falsy value
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

/*
Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses:
 (a && b) || (c && d).
 */

/*
------------------> Don’t replace if with || or &&
Sometimes, people use the AND && operator as a “shorter way to write if”.

For instance:

let x = 1;

(x > 0) && alert( 'Greater than zero!' );
The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

So we basically have an analogue for:

let x = 1;

if (x > 0) alert( 'Greater than zero!' );
Although, the variant with && appears shorter,
if is more obvious and tends to be a little bit more readable.
So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.

 */

/*
-------------------------------> ! (NOT)
The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

result = !value;
The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.
For instance:

alert( !true ); // false
alert( !0 ); // true

A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
The precedence of NOT ! is the highest of all logical operators,
 so it always executes first, before && or ||.
 */

/*
---------------------> Nullish coalescing operator '??'
A recent addition
This is a recent addition to the language. Old browsers may need polyfills.
The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

We can rewrite result = a ?? b using the operators that we already know, like this:

result = (a !== null && a !== undefined) ? a : b;
 */
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

/*
Using ?? with && or ||
Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

The code below triggers a syntax error:

let x = 1 && 2 ?? 3; // Syntax error
The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??.

Use explicit parentheses to work around it:

let x = (1 && 2) ?? 3; // Works

alert(x); // 2

 */

/*
The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.
 */