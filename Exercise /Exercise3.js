let age = parseInt(prompt("Enter your age:"));
if (!isNaN(age)) {
    if (age >= 18) {
        alert("Eligible");
    } else {
        alert("Not eligible");
    }
} else {
    alert("Invalid input. Please enter a number.");
}