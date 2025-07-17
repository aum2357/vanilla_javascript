
/*
---------------> alert
It shows a message and waits for the user to press “OK”.

For example:
alert("Hello");
The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc,
until they have dealt with the window. In this case – until they press “OK”.
 */

/*
-------------------> prompt
The function prompt accepts two arguments:

result = prompt(title, default);
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

title
The text to show the visitor.
default
An optional second parameter, the initial value for the input field.

 */

/*
they can cancel the input by pressing Cancel or hitting the Esc key,
then we get null as the result.

The call to prompt returns the text from the input field or null if the input was canceled.


 */
result = prompt("Enter name:", "Anonymous");
if (result === null) {
    console.log("User cancelled the input.");
}
else {
    console.log("Hello, " + result);
}

/*
-------------------> confirm
The syntax:

result = confirm(question);
The function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is true if OK is pressed and false otherwise.

For example:
It returns true for OK and false for Cancel/Esc.

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
 */