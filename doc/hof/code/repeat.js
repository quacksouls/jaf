const repeat = (n, fn) => {
    [...Array(n).keys()].forEach(() => fn());
};

const hi = () => console.log("Hello");
repeat(3, hi);
