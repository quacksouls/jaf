const num = [...Array(10).keys()];
let total = 0;
for (let i = 0; i < num.length; i++) {
    total += num[i];
}
console.log(total);
