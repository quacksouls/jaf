let a = 1;
const fun = () => {
    const b = 2;
    a += b;
};
console.log(a);
fun();
console.log(a);
console.log(b); // b is not defined in this scope
