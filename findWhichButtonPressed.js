function findWhichButtonPressed(value) {
    if (numbersArr.includes(value)) {
        calculator.appendNumber(value);
        calculator.render();
    }

    if (operationsArr.includes(value)) {
        calculator.chooseOperation(value);
        calculator.render();
    }

    switch (value) {
        case "=":
            calculator.compute();
            calculator.render();
            break;

        case "cleanAll":
            calculator.cleanAll();
            calculator.render();
            break;

        case "deleteLast":
            calculator.deleteLast();
            calculator.render();
            break;
        default:
    }
};