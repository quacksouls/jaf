# Binding, scope, and closure

Scoping rules are important as they help us to determine where in a program can
a variable be used. We first discuss name binding and then delve into the
scoping rules used by JavaScript. The idea of scope is then tied into closure,
the concept that a function can "remember" the context wherein it was first
defined.

<!-- ================================================================= -->

## Name binding

_Name binding_ occurs when we associate an identifier with an entity. Identifier
means a name. Entity means data, code, or object. The most common situation
where name binding occurs is when we declare a variable and assign it a value,
like so:

```js
let a = 1;
const b = 42;
a = 2;
```

In the above code snippet, we bind the variable (i.e. identifier) `a` to the
number 1 (i.e. entity). The variable `b` is bound to the number 42. We later
rebind `a` to the value 2. However, `b` cannot be rebound to a different (or
same) entity because `b` was declared via the keyword
[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).
The variable `a` initially references the number 1, but then references the
number 2 due to a rebinding. The variable `b` can only reference the number 42
and cannot be rebound.

<!-- ================================================================= -->

### Mutation

Rebinding should be distinguished from _mutation_. To rebind is to change what
an identifier references. In the code snippet below, we first bind the variable
`arr` to the empty string `""`. We then rebind the variable to the empty array
`[]`. We rebind by using the same identifier to reference a different entity.

```js
let arr = "";
arr = [];
arr.push(1);
arr.shift();
```

Mutation refers to a change in the entity referenced by an identifier. The code
line `let arr = "";` initially binds the identifier `arr` to the entity `""`. A
rebind then occurs in the code line `arr = [];` so that the identifier `arr` now
references the entity `[]`, the empty array. A mutation occurs in the code line
`arr.push(1);` because the entity (i.e. an array) referenced by `arr` is mutated
to the array `[1]` of one element. The entity is further mutated by the code
line `arr.shift();` so that it is now the empty array. We mutate by changing a
referenced entity.

<!-- ================================================================= -->

## Scope

The term _scope_ refers to that portion of a program where an identifier can
reference an entity. Not much help there. Let's approach the concept of scope as
follows. A program generally has 2 scopes: global and local. Identifiers in the
_global scope_ are visible to every part of the program. The most common
situation is global variables. Identifiers in the _local scope_ are visible only
within its local context. Local scope occurs when we declare a variable inside a
function. Let's study the following script to help us understand different
levels of scoping.

[import](code/scope1.js)

In the script [`scope1.js`](code/scope1.js), the variable `a` is in the global
scope because it is declared and initialized outside of any functions. The
variable `a` is visible within any functions defined in the script. The variable
`b` is declared and initialized inside the function `fun()`. The identifier `b`
is thus local to the function `fun()` and cannot be used outside of the
function. As `a` is a global variable, we can use it within `fun()`. Inside the
function `fun()`, we rebind the global variable `a` to a different entity. The
first print statement `console.log(a)` outputs the number 1. We then invoke the
function `fun()` to rebind `a` to the number 3. The second print statement
`console.log(a)` outputs the number 3. The third print statement
`console.log(b)` results in an error because JavaScript assumes that `b` is
declared within the global scope, where in fact `b` is visible within `fun()`
only.

<!-- ================================================================= -->

### Watch out

Using
[`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
adds another layer of complication to scoping rules. Consider the following code
snippet:

```js
for (var i = 0; i < 3; i++) {}
console.log(i); // => 3

for (let j = 0; j < 3; j++) {}
console.log(j); // error j is not defined
```

Within the first `for` statement, we use the keyword
[`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
to declare the variable `i` and initialize it to 0. Thus we expect `i` to be
local to the particular `for` statement. As the first print statement shows, our
expectation is wrong. The variable `i` can be accessed outside of the `for`
statement. In the second `for` statement, we use the keyword
[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
to declare the variable `j` and initialize it to 0. Both loops are identical,
save for the fact that we use `var` and the identifier `i` in the first, and
`let` and the identifier `j` in the second. However, the second print statement
results in an error as would be expected. The variable `j` is declared within
the scope of the `for` statement and should not be accessible outside of the
statement. The moral of the story is: Use
[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
and
[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let),
but avoid
[`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
altogether.

<!-- ================================================================= -->

### Lexical scope

JavaScript uses _lexical scope_, otherwise known as _static scope_. The term
lexical scope refers to the fact that JavaScript uses the lexical or _textual_
structure of a script to determine the scope of an identifier. The scoping rules
we discussed in the section [_Scope_](closure.md#scope) come under the rubric of
lexical scope. As a further illustration of lexical scope, consider the
following script:

[import](code/lexical.js)

The line `const a = 2;` declares `a` as a global variable and initializes it to
the number 2. The function `fun()` has access to `a` because `a` is a global
variable. Within the function `gun()`, the line `const a = 1;` declares a
variable `a` and initializes it to the number 1. This second identifier `a` is
local to the function `gun()` and different from the identifier `a` on line 1.
When invoking the function `fun()` as `fun(0)`, we pass 0 to `fun()` and the
function uses the global identifier `a` to return `0 + 2`, or 2. Consequently,
the print statement `console.log(gun());` outputs the number 2.

Lexical or static scope is usually contrasted with _dynamic scope_. In dynamic
scope, an identifier is bound to the most recently assigned entity. Refer back
to the script [`lexical.js`](code/lexical.js). Suppose JavaScript were to use
dynamic scope. The identifier `a` is first bound to the entity 2, then we bind
`a` to 1. Thus 1 is the most recently bound entity of `a`. If JavaScript were to
use dynamic scope, the print statement `console.log(gun());` would output 1.
However, JavaScript uses lexical scope, not dynamic scope.

<!-- ================================================================= -->

## Closure

A _closure_ is a record of a function together with the environment in which the
function was defined. The concept of closure can be illustrated in terms of a
function defined within another function. Consider the next script.

[import](code/closure.js)

Let's use the rule of lexical scoping to help us understand the script
[`closure.js`](code/closure.js). Within the function `outer()`, we have access
to the global variable `a` and the local variable `b`. Now consider the inner
function `inner()`. Within the body of the function `inner()`, we have access to
both `a` and `b`, and the local variable `c`. Invoking the function `outer()`
would return another function, i.e. the function `inner()`, and we assign the
resulting function to the variable `fun`, which itself is now a function.
Functions in JavaScript are perfectly capable of returning other functions as
results because JavaScript functions are higher-order. Printing the result of
calling `fun()` shows that we have 6. How?

The answer is closure. When the function `inner()` is declared, closure binds
the function to the environment within which it was created. The context within
which `inner()` was created consists of the following scopes:

1. All identifiers local to `inner()`.
1. All identifiers local to `outer()` because `inner()` is within `outer()`.
1. All identifiers in global scope.

Invoking the function `fun()`, where the identifier `fun` is bound to the
definition of `inner()`, gives us access to all identifiers within the scope of
`inner()`. That's the magic of closure.

Where have we seen closure before? Although we did not mention closure in the
section [_Functions as results_](result.md), the concept of
[partial application](result.md#partial-application) relies on closure to give a
returned function access to the context within which the function was created.
Closure is like a data structure with context.

<!-- ================================================================= -->

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
In the script below, explain why each print statement results in the given
output. The variable `a` within the function `gun()` is shadowing the variable
`a` on the first line. We should avoid shadowing variables, but shadowing is
used here for the purpose of the exercise.

[import](code/scope2.js)
