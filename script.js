let display = document.getElementById("display");

function appendValue(value) {
    let lastChar = display.value.slice(-1);
    
    // Prevent multiple consecutive operators
    if (isOperator(value) && isOperator(lastChar)) return;
    
    // Prevent starting with an operator except '-'
    if (display.value === "" && isOperator(value) && value !== "-") return;

    display.value += value;
}

function isOperator(char) {
    return ["+", "-", "*", "/", "%"].includes(char);
}

function calculate() {
    try {
        let lastChar = display.value.slice(-1);

        // Prevent evaluation if last char is an operator
        if (isOperator(lastChar)) return;

        let result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function deleteAll() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1) || "0";
}

function sqrt() {
    let num = parseFloat(display.value);
    display.value = num < 0 ? "Error" : Math.sqrt(num);
}

function percentage() {
    display.value = parseFloat(display.value) / 100;
}
