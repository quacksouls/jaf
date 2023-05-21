let total = 0;
for (let i = 0; i < 10; i++) {
    const n = Math.floor(100 * Math.random());
    if (n % 2 === 0) {
        total += n;
    }
}
console.log(total);
