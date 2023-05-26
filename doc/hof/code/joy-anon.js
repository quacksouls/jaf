const emotion = (callback) => {
    console.log("My current mood");
    callback(); // invoke the callback
};

emotion(() => console.log("Yay! \\o/")); // anonymous function as callback
