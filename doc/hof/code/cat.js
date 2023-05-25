// Store functions inside an object.
const pet = {
    name: "Tabby Whiskers",
    purr: () => console.log("Purrrr"),
    like: (food) => food === "fish",
};

console.log(pet.name);
pet.purr();
console.log(`Likes fish? ${pet.like("fish")}`);
console.log(`Likes lemon? ${pet.like("lemon")}`);
