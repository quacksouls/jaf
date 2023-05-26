const max = (fn, arr) => {
    let high = arr[0];
    arr.forEach((e) => {
        high = fn(high, e);
    });
    return high;
};

const language = [
    "Ada",
    "Alice",
    "Claire",
    "JADE",
    "JEAN",
    "LISA",
    "Julia",
    "Mary",
    "Miranda",
];
const number = [2, 45, 7, 1, 7, 13, 0, 5];
const pet = [
    { name: "Tabby", age: 2 },
    { name: "Fido", age: 1 },
    { name: "Iegor", age: 3 },
    { name: "Hamsuke", age: 2 },
];
const oldest = (a, b) => (a.age < b.age ? b : a);
const longest = (a, b) => (a.length < b.length ? b : a);

console.log(max(Math.max, number));
console.log(max(oldest, pet));
console.log(max(longest, language));
