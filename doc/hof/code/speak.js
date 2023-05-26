const speak = (callback, name) => callback(name);
const cat = (name) => console.log(`${name} says meow`);
const dog = (name) => console.log(`${name} says woof`);

speak(cat, "Tabby");
speak(dog, "Fido");
