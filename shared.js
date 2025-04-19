// Function to update high scores after a quiz is completed
function updateHighScores(playerName, playerScore) {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Add the new score and sort the high scores in descending order
    highScores.push({ player: playerName, score: playerScore });
    highScores.sort((a, b) => b.score - a.score);

    // Keep only the top 3 scores
    const topScores = highScores.slice(0, 3);

    // Save the updated high scores to localStorage
    localStorage.setItem("highScores", JSON.stringify(topScores));
}