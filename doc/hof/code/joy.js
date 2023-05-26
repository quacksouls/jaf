const joy = () => console.log("Yay! \\o/");
const emotion = (callback) => {
    console.log("My current mood");
    callback(); // invoke the callback
};

emotion(joy); // pass name of callback
