const max = (arr) => {
    let high = arr[0];
    arr.forEach((e) => {
        high = Math.max(high, e);
    });
    return high;
};

const array = [27, 35, 49, 23, 4, 1, 46, 6, 12, 1];
console.log(max(array));
