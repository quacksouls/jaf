const a = 1;
const gun = () => {
    const a = 2;
    return a;
};
console.log(a); // => 1
console.log(gun()); // => 2
console.log(a); // => 1
