const quizzes = [ // Sample quiz data
    { id: 1, name: "Quiz 1" },
    { id: 2, name: "Quiz 2" },
    { id: 3, name: "Quiz 3" }
];

// Initialize high scores in localStorage if not already set
if (!localStorage.getItem("highScores")) {
    const initialHighScores = [
        { player: "Player1", score: 0 },
        { player: "Player2", score: 0 },
        { player: "Player3", score: 0 }
    ];
    localStorage.setItem("highScores", JSON.stringify(initialHighScores));
}

// Function to display quizzes
function displayQuizzes() {
    const quizList = document.getElementById("quizzes").querySelector("ul");
    quizList.innerHTML = "";

    quizzes.forEach(quiz => { // Loop through each quiz and create a list item
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `quiz${quiz.id}.html`;
        link.textContent = quiz.name;
        listItem.appendChild(link);
        quizList.appendChild(listItem);
    });
}

// Function to display high scores on the homepage
function displayHighScores() {
    const highScoreList = document.getElementById("high-score-list");
    highScoreList.innerHTML = ""; // Clear existing content

    const highScores = JSON.parse(localStorage.getItem("highScores"));
    highScores.forEach(score => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.player}: ${score.score}`;
        highScoreList.appendChild(listItem);
    });
}

// Initialize the homepage
function initializeHomepage() {
    displayQuizzes();
    displayHighScores();
}

// Call the initialization function when the homepage loads
document.addEventListener("DOMContentLoaded", initializeHomepage);