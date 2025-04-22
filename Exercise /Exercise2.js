let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));

if (operator === "+") {
    alert(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operator === "-") {
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operator === "*") {
    alert(num1 + " * " + num2 + " = " + (num1 * num2));
} else if (operator === "/") {
    if (num2 !== 0) {
        alert(num1 + " / " + num2 + " = " + (num1 / num2));
    } else {
        alert("Error: Division by zero is not allowed.");
    }
} else {
    alert("Invalid operator. Please use +, -, *, or /.");
}