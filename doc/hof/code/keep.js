const keep = (callback, arr) => {
    const newArr = [];
    for (const a of arr) {
        if (callback(a)) {
            newArr.push(a);
        }
    }
    return newArr;
};

const isPet = (name) => {
    switch (name) {
        case "bird":
        case "cat":
        case "dog":
        case "hamster":
            return true;
        default:
            return false;
    }
};

const pet = keep(isPet, ["bard", "cat", "dog", "ham"]);
console.log(pet);
