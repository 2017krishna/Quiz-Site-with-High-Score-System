document.addEventListener("DOMContentLoaded", () => {
    // Check if the current page is a quiz page
    if (document.getElementById("quiz-container")) {
        displayQuizQuestions(); // Call this only on quiz pages
    }

    // Display high scores on all pages with a high-score-list
    if (document.getElementById("high-score-list")) {
        displayHighScores();
    }
});

// Function to display high scores
function displayHighScores() {
    const highScoreList = document.getElementById("high-score-list");
    highScoreList.innerHTML = ""; // Clear existing content

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.forEach(score => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.player}: ${score.score}`;
        highScoreList.appendChild(listItem);
    });
}

// Function to update high scores after a quiz is completed
function updateHighScores(playerName, playerScore) {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ player: playerName, score: playerScore });

    // Sort high scores in descending order and keep only the top 5
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores.slice(0, 5)));
}