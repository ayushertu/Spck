let randomNumber = Math.floor(Math.random() * 5) + 1;
let userGuess = parseInt(prompt("Guess a number between 1 and 5:"));

if (userGuess === randomNumber) {
    alert("Congratulations! You guessed it correctly.");
} else {
    alert(`Sorry, the correct answer was ${randomNumber}. Better luck next time!`);
}