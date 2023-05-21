const random = () => Math.floor(100 * Math.random());
const randint = [...Array(10).keys()].map(() => random());
const isEven = (x) => x % 2 === 0;
const add = (acc, curr) => acc + curr;
const total = randint.filter(isEven).reduce(add, 0);
console.log(total);
