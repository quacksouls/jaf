# Functions as arguments

As functions are treated like data in JavaScript, we can pass functions as
arguments to other functions. A function passed as an argument is referred to as
a _callback_ function. We expect the callback function to be invoked by the
function that takes the callback.

## Pass a function name

How exactly do we pass a callback to another function? We pass the name of the
callback to whichever function `func()` that accepts a callback. The function
`func()` would then have a reference it can use to invoke the callback. Consider
the following example.

[import](code/joy.js)

We pass the name of the function `joy()` to the function `emotion()`. Note that
we pass the name `joy` to `emotion()` to result in the expression
`emotion(joy)`.

Why not have the expression `emotion(joy())`? Consider the following example.

[import](code/joy-error.js)

We are not passing the name of a function, but rather execute the function
`joy()` and pass the result of the invocation to `emotion()`. The result of the
invocation `joy()` is
[`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
because the method
[`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
does not have a return value. In the body of `emotion()` where it attempts to
invoke the callback function, i.e. the expression

```js
callback();
```

we would receive an error because
[`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
is not a function. When passing a function as an argument, we pass the name of
the function, not invoke the function.

Many methods in the
[standard JavaScript library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
accept a callback function. For example, the array method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
takes a callback function. The method iterates over each element of a given
array and invokes the callback on the current element. Here is an example of the
method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
in action.

[import](code/fruit.js)

Anonymous functions can be used as callback functions. The method
[`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) is
another method from the
[standard JavaScript library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
that accepts a callback function. Consider the following example.

[import](code/alarm.js)

As a final example, sometimes we need to call a function multiple times. Instead
of using an explicit loop to invoke the function within the loop body, we opt
for the functional approach and declare a function `repeat()`. The function has
2 parameters: the number of times we want to invoke a function, and the name of
the callback function. The following implementation uses anonymous function.

[import](code/repeat.js)

## Pass arguments to callback functions

The array method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
takes a callback function and implicitly passes each array element to the
callback, one at a time. How would we explicitly pass an argument to a callback
function? The function accepting a callback must also take an argument to be
passed to the callback. By way of illustration, the next example declares a
function `speak()` that takes a callback and a parameter to be passed to the
callback.

[import](code/speak.js)

Here's a more complicated example. We want a function `keep()` that has 2
parameters: a callback function and an array. The function `keep()` invokes the
callback on each element of the given array. The callback returns `true` if the
argument given to it passes a test; returns `false` otherwise. The function
`keep()` returns an array of all elements of the given array that pass the test
implemented by the callback. For concreteness, consider the following script.

[import](code/keep.js)

Our callback is the function `isPet()`, which returns `true` if a string
represents a pet animal and `false` otherwise. We pass the function name `isPet`
to the function `keep()`, together with an array of strings. The function
`keep()` invokes `isPet()` on each element of the array and returns an array of
strings that represent pet animals. As a side note, the function `keep()` mimics
the array method
[`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

The next example illustrates the power of functions whose parameters consist of
other functions. The static method
[`Math.max()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
takes 1 or more numbers and returns the maximum of the given numbers. We want to
implement a general version of `Math.max()`. Before we get to the general, we
start with the particular. Consider the following implementation.

[import](code/max.js)

In order to generalize our function `max()`, we must abstract away this
particular expression:

```js
high = Math.max(high, e);
```

The method `Math.max()` assumes numeric data, hence would fail to compare other
data types such as objects or strings. We want to pass to `max()` a callback
function whose job is to serve as a maximum function. If the array given to
`max()` consists of strings, the callback should be able to deal with strings
and return the "maximum" of 2 strings. If the array consists of objects, the
callback should return the "maximum" of 2 objects. In the following script, we
abstract away the above line and invoke the callback on 2 array elements.

[import](code/max-fn.js)

## Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Modify the script [`fruit.js`](code/fruit.js) so that an anonymous function is
passed to the method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Without using the array method
[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach),
implement your own version of `forEach()`. Your implementation should accept 2
parameters: a callback function and an array.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Implement a function `sleep()` that takes 2 parameters: a callback function and
the number of milliseconds to sleep. Model the parameters upon the method
[`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout),
but do not use the method in your implementation. Modify the script
[`alarm.js`](code/alarm.js) to use your function `sleep()`.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
A function that accepts a callback can use the operator
[`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
to check that the passed in function is indeed a function. Modify the script
[`keep.js`](code/keep.js) to ensure that, in the function `keep()`, the
parameter `callback` is indeed a function.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Refer to the function `keep()` from the script [`keep.js`](code/keep.js).
Implement a callback function that returns `true` if a number is even and
returns `false` otherwise. Test your callback function against an array of all
integers between 0 and 10, inclusive.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Declare a function `every()` having 2 parameters: a callback function and an
array. The function `every()` returns `true` if each element in the array passes
the test implemented by the callback function. If one of the array elements does
not pass the test implemented by the callback, then `every()` returns `false`.
As an example, declare your callback to be a function that returns `true` if a
character is part of the English alphabet and `false` otherwise. Do not use the
array method
[`every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
This is similar to the previous exercise, but with a twist. Declare a function
`some()` that has 2 parameters: a callback and an array. The function `some()`
returns `true` if one of the array elements satisfies the test implemented by
the callback. In case the callback returns `false` for each array element, then
`some()` returns `false`. For concreteness, declare your callback to be a
function that returns `true` if an integer is even and `false` otherwise. Do not
use the array method
[`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Consider an array `arr` of all integers between 0 and 100, inclusive. Use your
function `some()` to help you determine whether `arr` has a particular element.
For example, use `some()` to test whether `arr` has the integer 42. Now test to
see whether `arr` has the number 101.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The array method
[`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
accepts a function `compareFn()` that implements a sorting order. The method
passes 2 array elements `a` and `b` to the compare function `compareFn()`, which
should return one of the following results:

1. A positive integer if `a` comes after `b`, i.e. the ordering `[b, a]`.
1. A negative integer if `a` precedes `b`, i.e. the ordering `[a, b]`.
1. Zero if the original ordering is to be kept.

To sort an array of integers in non-decreasing order, our compare function can
be:

```js
const ascend = (a, b) => a - b;
```

Use the above compare function to sort the following array:

```js
const arr = [2, 45, 7, 1, 7, 13, 0, 5];
```

Declare a compare function that sorts an array in non-increasing order.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Implement a function `map()` having 2 parameters: a callback function and an
array. The function `map()` applies the callback on each element of the array
and returns an array of results from invoking the callback. Do not use the array
method
[`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

1. Implement `map()` using either a `for` or `while` loop.
1. Rewrite your implementation to not use either of `for` or `while`.
1. Declare your callback to be a function that increments a number by 1. Use
   this function to test your `map()`.
1. Declare a callback that squares a number. Use this function to test your
   `map()`.
