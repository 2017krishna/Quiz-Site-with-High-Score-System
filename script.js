const quizzes = [ // Sample quiz data
    { id: 1, name: "Quiz 1" },
    { id: 2, name: "Quiz 2" },
    { id: 3, name: "Quiz 3" }
];

const highScores = [ // Sample high score data
    { player: "Player1", score: 100 },
    { player: "Player2", score: 90 },
    { player: "Player3", score: 80 }
];

function displayQuizzes() { // Function to display quizzes
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

function displayHighScores() { // Function to display high scores
    const highScoreList = document.getElementById("high-scores").querySelector("ul");
    highScoreList.innerHTML = ""; 

    highScores.forEach(score => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.player}: ${score.score}`;
        highScoreList.appendChild(listItem);
    });
}

function initializeHomepage() { // Initialize the homepage
    displayQuizzes();
    displayHighScores();
}

document.addEventListener("DOMContentLoaded", initializeHomepage); // Wait for the DOM to load before initializing the homepage