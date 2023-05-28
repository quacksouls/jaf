# Functions as results

Within a function, we can return a function as a result. When would this feature
ever be useful? Let's start with a simple example to help us understand why
returning a function would be desirable in certain situations.

<!-- ================================================================= -->

## Simple example

Suppose we want a function that doubles any number given to it. Consider the
following implementation.

```js
const double = (x) => x * 2;
```

The above function does what is required. So what is wrong with it? Nothing,
really. Now we want a function that triples a number. Here it is.

```js
const triple = (x) => x * 3;
```

OK. Now a function that multiplies its argument by 10. No problem.

```js
const tens = (x) => x * 10;
```

The pattern is that we multiply the argument by a fixed number. Let's abstract
the above behaviour by having a function return another function, as shown in
the following script.

[import](code/mult.js)

In the script [`mult.js`](code/mult.js), we declare a function that returns a
function that has 1 parameter. The function `math()` returns a function that
accepts an argument `y`. In the body of the returned function, the value of `x`
is already fixed. Only the value of `y` varies because we are meant to feed
values to the returned function. To create a function that doubles its argument,
we give the number 2 to `math()` so as to fix the value of `x` inside the body
of the returned function. After all, 2 multiplied by a number is the doubling
operation. To create a function that triples a given number, we pass 3 to
`math()` to fix the value of `x`. The returned function is consequently a
tripling function. And so on.

The returned function can also be invoked like so:

```js
math(x)(y);
```

Doubling the number 1 is:

```js
console.log(math(2)(1));
```

Tripling the number 4 is:

```js
console.log(math(3)(4));
```

Multiplying the number 6 by 10 is:

```js
console.log(math(10)(6));
```

<!-- ================================================================= -->

## Partial application

The idea presented in the section [_Simple example_](result.md#simple-example)
is known as _partial function application_, commonly shortened to _partial
application_. If we have a function that takes multiple arguments, partial
application allows us to fix one or more arguments to obtain a function of the
remaining arguments. We can supply all arguments at once to a function. In some
cases, we might not know ahead of time the values of all arguments, but only a
few. Partial application allows us to supply only the first few arguments, with
the remaining arguments being supplied as their values are known.

Partial application can also be understood as a way to generalize/specialize
functions. In the script [`mult.js`](code/mult.js) from the section
[_Simple example_](result.md#simple-example), the function `math()` is a
generalized function that abstracts the idea of multiplying 2 numbers. We
specialize `math()` by creating the function `double()` to double a number.

Let's use another example to help us consolidate our understanding of partial
application. We want to develop a simple image writer to help us manipulate and
store pet images. Our early prototype has the following function.

[import](code/iwrite.js)

Image file format comes in many varieties. Some of the common formats include
GIF, JPEG, PNG, and SVG. Recognizing that each image format should be handled
differently, we modify the function `imgWriter()` to use partial application.

[import](code/iwrite-partial.js)

The function `imgWriter()` is now declared as a generalized function, taking 1
parameter and returning a function having 3 parameters. Whenever we require a
writer function that can handle one particular image format, we pass the name of
the image format to `imgWriter()`, which returns a function that handles that
particular format. Partial application allows us to specialize `imgWriter()` to
a function that handles a specific image format.

Recall that functions in JavaScript are first-class citizens. We can pass
functions as arguments to other functions. Moreover, functions are higher-order
because their parameters can be other functions. Combining the above 2 pieces of
information, there is nothing stopping us from declaring a function to handle
the partial application for us. Observe:

[import](code/partial.js)

The function `partial()` is meant to partially apply an argument `arg` to a
given function `fn()`. The definition of `partial()` is rather abstract. We
impose no restrictions on what `fn()` should be, save for the fact that `fn()`
should have at least 2 parameters. The first argument of `fn()` is `arg`. The
remaining arguments are given by way of the
[rest parameter syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
To concretize `fn()`, we declare the function `topk()` to return the top k items
in a sequence of items. If `k = 1`, then `topk()` would be a function that
returns the first element in a sequence of elements, i.e. the "head" of a
sequence. This is exactly what the following expression does:

```js
const head = partial(topk, 1);
```

The function `top3()` returns the first 3 items in a sequence, the function
`tail()` returns the last item in a sequence, and `ends()` returns the first and
last items in a sequence.

<!-- ================================================================= -->

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Refer to the script [`mult.js`](code/mult.js). Use the function `math()` to
obtain a function that halves any given number.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
In the script [`mult.js`](code/mult.js), modify the function `math()` to have 2
parameters: a number `x` and an operator. The operator should be one of the
arithmetic operators: `+`, `-`, `*`, `/`. The function `math()` returns a
function `func()` that has 1 parameter, i.e. a number `y`. The function `func()`
returns the result of applying the arithmetic operator on the numbers `x` and
`y`. For example, the expression

```js
const increment = math(1, "+");
```

should result in a function `increment()` that adds 1 to each given number. The
expression

```js
const decrement = math(1, "-");
```

should result in a function `decrement()` that subtracts 1 from each given
number.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Modify the script [`partial.js`](code/partial.js) so that the function `fn()`
has 2 parameters: the first parameter is a number and the second is an array.
Modify the rest of the script accordingly.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
A URL consists of various components:

1. Scheme: The protocol for accessing a resource on the Internet.
1. Domain: The host holding the resource.
1. Path: The specific resource in the host.

The following code snippet declares a function to build a URL according to the
above components.

[import](code/url.js)

Modify the function `createURL()` to use partial application.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Every fixed interval, you want to query an online API for some data. Your early
script to poll the API is:

[import](code/api.js)

Modify the script so that `spacedCall()` is a higher-order function.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Declare a function that returns a random string of alphanumeric characters. For
the purposes of this exercise, only generate strings having at most 11
characters.

1. Modify your function to allow the generation of random strings each beginning
   with a fixed prefix.
1. Modify your function again to restrict the length of each generated string.
1. Modify your function to be higher-order.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
This exercise builds upon the head/tail example from the section
[_Partial application_](result.md#partial-application).

1. Declare a function `first()` that takes a number `n` and a bunch of other
   arguments. The function returns the first `n` items in the bunch, excluding
   the argument `n`. Specialize the function `first()` by declaring a function
   `head()` that returns the first element of a sequence. Given the sequence
   `1, 2, 3, 4`, the function `head()` should return `1`.
1. Declare a function `last()` that takes a number `n` and a bunch of other
   arguments. The function returns the last `n` items in the bunch, not
   including the argument `n`. Specialize the function `last()` by declaring a
   function `tail()` that returns the last element of a sequence. Given the
   sequence `1, 2, 3, 4`, the function `tail()` should return `4`.
1. Declare a function `swap()` that takes a bunch of arguments. The function
   moves the head of the sequence and places it at the end of the sequence.
   Given the sequence `1, 2`, the function `swap()` should return `2, 1`.
1. Names given as `FirstName LastName` are sometimes reversed as
   `LastName, FirstName` for various purposes. A common example where the
   reversal occurs is in academic publications, where scholars reference a book
   or research article by the format of `LastName, FirstName`. Use the function
   `swap()` to print `"James Bond"` as `"Bond, James"`.
