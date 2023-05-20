const num = [...Array(10).keys()];
const add = (acc, curr) => acc + curr;
const total = num.reduce(add, 0);
console.log(total);
