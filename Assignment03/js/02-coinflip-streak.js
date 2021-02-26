let coinFlip, times, randonNum = Math.round(Math.random()), i;
times = parseInt(prompt("How many times do you want to flip a coin?"));
i = 1;
do {
    coinFlip = randonNum;
    i++;
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else if (coinFlip === 1) {
        window.console.log("Tails");
        break;
    } else {
        continue;
    }
} while (i <= times);