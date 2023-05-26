const alarm = (n) => {
    if (n < 1) {
        console.log("Tick tock, Mr. Wick.");
        return;
    }

    console.log(n);
    const delay = 1000;
    setTimeout(() => alarm(n - 1), delay);
};

alarm(5);
