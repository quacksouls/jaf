# First-class functions

An important concept in functional programming (FP) is to treat functions as
first-class. A function is a _first-class function_ provided it has the
following properties:

1. Can be assigned to a variable.
1. Can be stored in a data structure.
1. Can be passed as an argument to another function.
1. Can be returned as a result from another function.

First-class functions are treated like a primitive data type such as string,
number, boolean, and `null`. Data in JavaScript are first-class because they
have the above 4 properties. For example, we can store a string to a variable,
store a number in a data structure such as an array, pass a boolean as an
argument to a function, and return `null` as a result from a function.

Which features of JavaScript are not first-class? Reconsider the above 4
properties and think about how they relate to loops and conditionals. Can we
pass a loop to a function? Can we manipulate a loop at runtime? Rather than
focus on which features of JavaScript are _not_ first-class, it is helpful to
concentrate on those aspects that _are_ first-class. Data, objects, and
functions in JavaScript are first-class. The above 4 properties allow us to
manipulate functions as if they are data.

A _higher-order function_ is a function that has the following properties:

1. Takes a function as an argument.
1. Returns a function as a result.

In order for a language to support FP, functions in that language must be
first-class and higher-order. If a function is first-class only, it cannot be
passed as an argument to another function because there would not be functions
that take other functions as arguments. First-class functions are data.
Higher-order functions operate on first-class functions and treat them like any
other primitive data.
