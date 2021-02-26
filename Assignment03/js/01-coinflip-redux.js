let coinFlip, times, randonNum = Math.round(Math.random());
times = Number(prompt("How many times do you want to flip a coin?"));
for (let i = 1; i <= times; i++) {
    coinFlip = randonNum;
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else if (coinFlip === 1) {
        window.console.log("Tails");
    } else {
       continue;
    }
}