let score = parseInt(prompt("Enter your score (0-100):"));

if (score > 100 || score < 0) {
    alert("Invalid score. Please enter a score between 0 and 100.");
} else if (score >= 70) {
    alert("Excellent");
} else if (score >= 50) {
    alert("Good");
} else {
    alert("Needs Improvement");
}