for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        window.console.log("Macro! Polo!");
    } else if (num % 3 === 0) {
        window.console.log("Marco!");
    } else if (num % 5 === 0) {
        window.console.log("Polo!");
    } else {
        window.console.log(num);
    }
}
