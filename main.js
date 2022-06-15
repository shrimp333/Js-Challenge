let rolls = [];


let roll = () => {

    let dice = Math.floor(Math.random() * 6 + 1);
    return dice;
}

let beginRolls = () => {
    console.log("Rolls begin")
    let howMany = parseInt(document.getElementById("input").value);
    if (howMany > 20)
        howMany = 20;
    for (let i = 0; i < howMany; i++) {
        let num = roll();
        rolls.push(num);
    }
    displayRolls();
}

    let displayedRolls = [];
    let rollsDisplay = document.getElementById("rolls");
    let averageDisplay = document.getElementById("average");
    let totalDisplay = document.getElementById("total");
    let displayTotal = 0;
    let displayAverage = 0;
let displayRolls = () => {
    console.log("Displayrolls")
    console.log(`Rolls: ${rolls.length}`)
    console.log(rolls[0]);
    for (let i = 0; i < rolls.length; i++) {
        setTimeout(() => {
            rollsDisplay.innerHTML += rolls[i] + " ";
            displayedRolls.push(rolls[i]);
            console.log(displayedRolls[i]);
            displayTotal += parseInt(rolls[i]);
            for (let i = 0; i < displayedRolls.length; i++){
                displayAverage = displayTotal / displayedRolls.length;
                averageDisplay.innerHTML = `Average: ${displayAverage}`;
                totalDisplay.innerHTML = `Total: ${displayTotal}`;
            }
        }, 1000 * i);
    }
}

let reset = () => {
    rolls = [];
    displayedRolls = [];
    rollsDisplay.innerHTML = "";
    averageDisplay.innerHTML = "Average:";
    totalDisplay.innerHTML = "Total:";
    displayTotal = 0;
    displayAverage = 0;
}