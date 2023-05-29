const a = 2;
const fun = (x) => x + a;
const gun = () => {
    const a = 1;
    return fun(0);
};
console.log(gun()); // => 2
