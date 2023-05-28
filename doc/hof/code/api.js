const poll = () => console.log("Query API");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const spacedCall = async (n, delay) => {
    for (let i = 0; i < n; i++) {
        await sleep(delay);
        poll();
    }
    console.log("Done");
};

const delay = 1000;
const howMany = 5;
spacedCall(howMany, delay);
