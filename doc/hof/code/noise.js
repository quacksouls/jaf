// Store functions inside an array.
const bird = () => "tweet";
const cat = () => "meow";
const dog = () => "woof";
for (const pet of [bird, cat, dog]) {
    console.log(pet());
}
