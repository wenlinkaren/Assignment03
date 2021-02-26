investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
while (isNaN(investment)) {
    investment = window.prompt("Enter investment amount as xxxx.xx");
}
rate = parseFloat(prompt('Enter interest rate as xx.x'));
while (isNaN(rate) || rate < 0 || rate > 60) {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
}
years = parseInt(prompt('Enter the number of years'));
while (isNaN(years) || years < 1 || years > 30) {
    years = parseInt(prompt('Enter the number of years'));
}
