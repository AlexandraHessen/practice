const previousValueOnScreen = document.querySelector(".previousValueOnScreen");
const currentValueOnScreen = document.querySelector(".currentValueOnScreen");
const buttonsContainer = document.querySelector(".buttons-container");

const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operationsArr = ["+", "-", "*", "/", "%"];

const calculator = new Calculator(previousValueOnScreen, currentValueOnScreen);

buttonsContainer.addEventListener("click", handlerClick);
document.addEventListener("keydown", handlerKeyDown);

function handlerClick(EO) {
    EO = EO || window.event;
    if (EO.target.tagName.toLowerCase() !== "button") return;
    let value = EO.target.name;
    findWhichButtonPressed(value);
};