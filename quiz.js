const quizCategories = {
    GeneralKnowledge: [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Mars"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            correctAnswer: "Japan"
        },
        {
            question: "What is the smallest continent by land area?",
            options: ["Europe", "Australia", "Antarctica", "South America"],
            correctAnswer: "Australia"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correctAnswer: "Mount Everest"
        },
        {
            question: "Which year did World War II end?",
            options: ["1945", "1939", "1941", "1944"],
            correctAnswer: "1945"
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correctAnswer: "Nile River"
        }
    ],
    Math: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4"
        },
        {
            question: "What is the square root of 16?",
            options: ["2", "4", "6", "8"],
            correctAnswer: "4"
        },
        {
            question: "What is 10 x 10?",
            options: ["100", "10", "1000", "110"],
            correctAnswer: "100"
        },
        {
            question: "What is 15 divided by 3?",
            options: ["3", "5", "6", "4"],
            correctAnswer: "5"
        },
        {
            question: "What is the value of π (pi) to two decimal places?",
            options: ["3.14", "3.15", "3.13", "3.16"],
            correctAnswer: "3.14"
        },
        {
            question: "What is 7 x 8?",
            options: ["54", "56", "58", "60"],
            correctAnswer: "56"
        },
        {
            question: "What is the perimeter of a square with side length 5?",
            options: ["20", "25", "15", "10"],
            correctAnswer: "20"
        },
        {
            question: "What is 12% of 50?",
            options: ["6", "5", "7", "8"],
            correctAnswer: "6"
        },
        {
            question: "What is the area of a rectangle with length 10 and width 4?",
            options: ["40", "14", "20", "24"],
            correctAnswer: "40"
        },
        {
            question: "What is 9 squared?",
            options: ["81", "72", "64", "90"],
            correctAnswer: "81"
        }
    ],
    Science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "NaCl"],
            correctAnswer: "H2O"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Carbon Dioxide"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
            correctAnswer: "Mitochondria"
        },
        {
            question: "What planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            correctAnswer: "Mercury"
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            correctAnswer: "100°C"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            correctAnswer: "Au"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Lungs"],
            correctAnswer: "Skin"
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "250,000 km/s"],
            correctAnswer: "300,000 km/s"
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correctAnswer: "Nitrogen"
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
            correctAnswer: "Photosynthesis"
        }
    ]
};

// Function to calculate the player's score
function calculateScore(correctAnswers) {
    return correctAnswers * 10; // Example: 10 points per correct answer
}

// Function to handle quiz completion
function completeQuiz(correctAnswers) {
    const playerName = prompt("Enter your name to save your score:");
    if (playerName) {
        const playerScore = correctAnswers * 10; // Example: 10 points per correct answer
        updateHighScores(playerName, playerScore); // Save the score
        alert(`Quiz complete! Your score: ${playerScore} has been saved.`);
    } else {
        alert("Your score was not saved.");
    }
    window.location.href = "index.html"; // Redirect to the homepage
}

// Function to display quiz questions
function displayQuizQuestions() {
    const quizContainer = document.getElementById("quiz-container");

    // Check if the quiz-container exists
    if (!quizContainer) {
        console.error("Quiz container not found. This function should only run on quiz pages.");
        return;
    }

    quizContainer.innerHTML = ""; // Clear existing content

    let correctAnswers = 0;
    let answeredQuestions = 0;

    const questions = quizCategories.GeneralKnowledge; // Example: Use GeneralKnowledge category

    questions.forEach((quiz, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        const questionText = document.createElement("h3");
        questionText.textContent = `${index + 1}. ${quiz.question}`;
        questionElement.appendChild(questionText);

        const optionsList = document.createElement("ul");
        quiz.options.forEach(option => {
            const optionItem = document.createElement("li");
            const optionButton = document.createElement("button");
            optionButton.textContent = option;

            optionButton.addEventListener("click", () => {
                if (!optionButton.disabled) {
                    const buttons = optionsList.querySelectorAll("button");
                    buttons.forEach(button => (button.disabled = true));

                    if (option === quiz.correctAnswer) {
                        questionElement.classList.add("correct");
                        correctAnswers++;
                    } else {
                        questionElement.classList.add("incorrect");
                    }

                    const feedback = document.createElement("p");
                    feedback.textContent =
                        option === quiz.correctAnswer
                            ? "Correct!"
                            : `Wrong! The correct answer is: ${quiz.correctAnswer}`;
                    feedback.style.color = option === quiz.correctAnswer ? "green" : "red";
                    questionElement.appendChild(feedback);

                    answeredQuestions++;
                    if (answeredQuestions === questions.length) {
                        const finishButton = document.getElementById("finish-quiz-button");
                        finishButton.style.display = "block"; // Show the button
                    }
                }
            });

            optionItem.appendChild(optionButton);
            optionsList.appendChild(optionItem);
        });

        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });

    // Ensure the "Submit Quiz" button exists and append it after all questions
    let finishButton = document.getElementById("finish-quiz-button");
    if (!finishButton) {
        finishButton = document.createElement("button");
        finishButton.id = "finish-quiz-button";
        finishButton.textContent = "Submit Quiz";
        finishButton.style.display = "none"; // Initially hidden
    }
    quizContainer.appendChild(finishButton);

    // Set the onclick property for the button
    finishButton.onclick = () => completeQuiz(correctAnswers);
}

// Function to lock all options for a question and provide feedback
function lockQuestionOptions(selectedButton, optionsList, selectedOption, correctAnswer, questionElement) {
    // Disable all buttons for this question
    const buttons = optionsList.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Provide feedback for the selected answer
    const feedback = document.createElement("p");
    feedback.textContent =
        selectedOption === correctAnswer
            ? "Correct!"
            : `Wrong! The correct answer is: ${correctAnswer}`;
    feedback.style.color = selectedOption === correctAnswer ? "green" : "red";
    questionElement.appendChild(feedback);
}

// Initialize the quiz page
function initializeQuizPage() {
    displayQuizQuestions();
    displayHighScores(); // Ensure high scores are displayed on quiz pages
}

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

// Call the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initializeQuizPage);