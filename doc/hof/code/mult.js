// Can be simplied to this.
// const math = (x) => (y) => x * y;
const math = (x) => {
    return function (y) {
        return x * y; // value of x is fixed
    }
};

const double = math(2);
const triple = math(3);
const tens = math(10);

console.log(double(1));
console.log(math(2)(1));

console.log(triple(4));
console.log(math(3)(4));

console.log(tens(6));
console.log(math(10)(6));
