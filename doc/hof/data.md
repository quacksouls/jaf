# Functions as data

A function in JavaScript is treated like data. How? We can assign a function to
a variable and store a function in a data structure.

<!-- ================================================================= -->

## Assign to variable

One way to define a function is to use the
[`function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
as demonstrated in the next example:

[import](code/function-declare.js)

To assign a function to a variable, all we have to do is assign the `function`
declaration to a variable, like so:

[import](code/function-assign.js)

A second way to assign a function to a variable is to declare an
[anonymous function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
and assign the function expression to a variable.

[import:2-](code/function-anon.js)

A third way is to declare the function as an
[arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
and assign the function expression to a variable.

[import](code/function-arrow.js)

Treating functions like data also allows us to rename functions without changing
their declarations. Have you ever encountered a function name that is rather
long and unwieldy to type? Like `myAwesomeRoutine()`? You do not need to change
the function name wherever it occurs in a bunch of source files. Simply assign
the function to a shorter variable name. Here is an example.

[import](code/rename.js)

<!-- ================================================================= -->

## Store in data structure

Primitive data like strings and numbers can be stored in data structures such as
arrays, sets, maps, and objects. We learnt from the section
[_Assign to variable_](data.md#assign-to-variable) that JavaScript treats
functions as if they were data. We would expect to be able to store functions in
data structures in the same way as we can store strings and numbers in data
structures. Indeed we can, as shown in the next example.

[import](code/noise.js)

We can take this concept further by embedding functions inside objects. That is
essentially how JavaScript supports the concept of a
[class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
Here is an example on how to assign a function as a value of an object key.

[import](code/cat.js)

<!-- ================================================================= -->

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
In the following function declaration, the function name is rather long. Change
the function name to a shorter, descriptive name without changing the function
declaration.

[import:2-](code/life.js)

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
A principle of readable code is: Choose a "good" function/variable name. How do
we choose a "good" name for our function or variable? See _Chapter 11: The Power
of Variable Names_ of the following book:

<!-- prettier-ignore -->
- Steve McConnell. _Code Complete._ 2nd edition, Microsoft Press, 2004.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Choosing a "good" function/variable name is part of what makes good programming
style. The following texts offer some guidelines worth reading:

<!-- prettier-ignore -->
- Brian W. Kernighan and P. J. Plauger. _The Elements of Programming Style._
  2nd edition, McGraw-Hill, 1978.
- Henry F. Ledgard. _Programming Proverbs: Principles of Good Programming with
  Numerous Examples to Improve Programming Style and Proficiency._ Hayden Book
  Company, 1975.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Modify the script [`noise.js`](code/noise.js) to store the given functions
inside a
[set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
Repeat the exercise, but store the functions inside a
[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Tabby does not like lemons. Modify the script [`cat.js`](code/cat.js) to declare
a function that returns whether Tabby dislikes a particular food. The function
declaration should be the value of a key in the object `pet`.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Modify the script [`cat.js`](code/cat.js) by rewriting the object `pet` as a
class.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Implement an object `math` each of whose keys references a function to perform a
mathematical operation. Use the following template to help you get started.

[import](code/math.js)
