/*
-------------------->String Conversion
String conversion happens when we need the string form of a value.

For example, alert(value) does it to show the value.

We can also call the String(value) function to convert a value to a string:

String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
 */
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


/*
---------------------------> Numeric Conversion
Numeric conversion in mathematical functions and expressions happens automatically.
*/
//For example, when division / is applied to non-numbers:

alert( "6" / "2" ); // 3, strings are converted to numbers
//We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
/*
Explicit conversion is usually required when we read a value from a string-based source
like a text form but expect a number to be entered.

imp:-> If the string is not a valid number, the result of such a conversion is NaN.
For instance:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
Numeric conversion rules:

Value	            Becomes…
-----------------------------
undefined	        NaN
null	            0
true and false	    1 and 0
string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed.
If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string.
An error gives NaN.

Please note that null and undefined behave differently here:
 null becomes zero while undefined becomes NaN.
 Examples:
 */
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

/*
------------------------------> Summary
The three most widely used type conversions are to string, to number, and to boolean.

String Conversion –> Occurs when we output something. Can be performed with String(value).
 The conversion to string is usually obvious for primitive values.

Numeric Conversion –> Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Boolean Conversion –> Occurs in logical operations and conditions. Can be performed with Boolean(value).

Follows the rules:

Value	                        Becomes…
0, null, undefined, NaN, ""	    false
any other value	                true
Most of these rules are easy to understand and memorize.
The notable exceptions where people usually make mistakes are:

imp:->  undefined is NaN as a number, not 0.
"0" and space-only strings like " " are true as a boolean.
 */
console.log(Boolean(0), Boolean(null),
    Boolean(undefined), Boolean(NaN), Boolean(""))// false false false false false