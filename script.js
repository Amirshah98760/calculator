let expression = '';

function appendNumber(number) {
    expression += number;
    document.getElementById('display').value = expression;
}

function appendOperator(operator) {
    if (expression !== '') {
        const lastChar = expression[expression.length - 1];
        if (!isNaN(lastChar)) {
            expression += operator;
            document.getElementById('display').value = expression;
        }
    }
}


function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}


function calculateResult() {
    if (expression !== '') {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    }
}
// function eraseLastCharacter() {
    //     expression = expression.slice(0, -1);
    //     document.getElementById('display').value = expression;
    // }
    
    // function appendDecimal() {
    //     if (expression === '' || isNaN(expression[expression.length - 1])) {
    //         expression += '0.';
    //     } else if (!expression.includes('.')) {
    //         expression += '.';
    //     }
    //     document.getElementById('display').value = expression;
    // }