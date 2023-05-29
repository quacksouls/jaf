const a = 1;

const outer = () => {
    const b = 2;
    const inner = () => {
        const c = 3;
        return a + b + c;
    };
    return inner;
};

const fun = outer();
console.log(fun()); // => 6
