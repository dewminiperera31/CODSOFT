let display = document.getElementById("display");
let currentOperation = '';
let previousValue = '';
let currentValue = '';

function appendToDisplay(value) {
    display.value += value;
    currentValue = display.value;
}

function operate(operator) {
    if (currentOperation === '') {
        previousValue = currentValue;
        display.value += ' ' + operator + ' ';
        currentOperation = operator;
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    previousValue = '';
    currentValue = '';
}

function calculate() {
    let [num1, operator, num2] = display.value.split(' ');
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    
    display.value = result;
    currentOperation = '';
    previousValue = '';
    currentValue = result;
}
