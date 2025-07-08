/*
Labels for break/continue
Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):
*/
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
/* We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}
The break <labelName> statement in the loop below breaks out to the label:
*/
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
/*
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (*) to alert('Done!').

We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }
 */


/*
----------------------> The “while” loop
The while loop has the following syntax:

while (condition) {
  // code
  // so-called "loop body"
}
While the condition is truthy, the code from the loop body is executed.

For instance, the loop below outputs i while i < 3:
*/
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

/*
The “for” loop
The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}
for (;;) {
  // repeats without limits
}
Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:
*/
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

/*
--------> The "switch" statement
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

The syntax
The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).

An example of switch (the executed code is highlighted):

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}


Grouping of “case”
Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
Now both 3 and 5 show the same message.

The ability to “group” cases is a side effect of how switch/case works without break.
 Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.
 */
