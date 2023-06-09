# Simple examples

This section presents various simple examples to demonstrate the functional way
of thinking. The demonstration consists of toy examples and do not showcase all
that functional programming has to offer. Don't worry if you find the
declarative JavaScript code incomprehensible at the moment. The remainder of the
book is meant to help you learn the functional way of programming.

## Sum it up

You have an array of all integers between 0 and 9, inclusive. How would you add
together all numbers in the array? An imperative program to achieve the desired
result might be as follows.

[import](code/sum-imperative.js)

The above program describes step-by-step how to obtain the sum of integers in an
array. The instructions can be summarized as follows.

```
initially the total is 0
for each element in the array
    add the element to the running total
```

Contrast the imperative program above with the functional version below.

[import](code/sum-functional.js)

The functional program says this.

```
add is the function to obtain cumulative sum
reduce the array elements to a value, using the function add
```

We describe the result we want. The looping is delegated to the array method
[`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
and we tell it to use the function `add()` to obtain the cumulative sum.

## Sum even integers

Here's a variation on the summing problem from the section
[_Sum it up_](simple-eg.md#sum-it-up). Add together all even numbers in an array
of random integers. A step-by-step description might be something like:

[import](code/ransum-imperative.js)

A declarative version might be something along the line of:

[import](code/ransum-functional.js)
