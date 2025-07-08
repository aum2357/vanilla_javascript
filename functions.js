/*
Function Declaration
To create a function we can use a function declaration.

It looks like this:

function showMessage() {
  alert( 'Hello everyone!' );
}
The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.

function name(parameter1, parameter2, ... parameterN) {
 // body
}
Our new function can be called by its name: showMessage().

For instance:

function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
 */

/*
Local variables
A variable declared inside a function is only visible inside that function.

For example:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
 */

/*
Outer variables
A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
The function has full access to the outer variable. It can modify it as well.
 */
// for example:
let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

/*
Default values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");
That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
Now if the text parameter is not passed, it will get the value "no text given".

The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

showMessage("Ann", undefined); // Ann: no text given
Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

 */

// A function can return a value. If it doesn’t, then its result is undefined.