const partial = (fn, arg) => (...moreArg) => fn(arg, ...moreArg);
const topk = (n, ...arg) => arg.slice(0, n);
const bottomk = (n, ...arg) => arg.slice(arg.length - n);

const head = partial(topk, 1);
const top3 = partial(topk, 3);
const tail = partial(bottomk, 1);
const ends = (...arg) => [head(...arg), tail(...arg)].flat();

console.log(head("a", "b", "c", "d"));
console.log(top3("gold", "silver", "bronze", "fourth", "fifth"));
console.log(tail("a", "b", "c", "d"));
console.log(ends("a", "b", "c", "d"));
