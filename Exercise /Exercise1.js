let number = prompt("Enter a number:");
if (!isNaN(number)) {
    if (number % 2 == 0) {
        alert(number + " is an even number.");
    } else {
        alert(number + " is an odd number.");
    }
} else {
    alert("Invalid input. Please enter a number.");
}

