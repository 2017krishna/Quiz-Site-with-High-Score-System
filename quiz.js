// Expanded data for quiz categories and questions
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
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correctAnswer: "Vatican City"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
            correctAnswer: "Tokyo"
        },
        {
            question: "Which year did the Titanic sink?",
            options: ["1912", "1905", "1920", "1918"],
            correctAnswer: "1912"
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
            options: ["50", "100", "150", "200"],
            correctAnswer: "100"
        },
        {
            question: "What is 25 divided by 5?",
            options: ["4", "5", "6", "7"],
            correctAnswer: "5"
        },
        {
            question: "What is the value of Pi (approx)?",
            options: ["3.14", "2.71", "1.62", "4.13"],
            correctAnswer: "3.14"
        },
        {
            question: "What is 7 x 8?",
            options: ["54", "56", "58", "60"],
            correctAnswer: "56"
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            correctAnswer: "30"
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
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correctAnswer: "300,000 km/s"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
            correctAnswer: "Mitochondria"
        },
        {
            question: "What planet is closest to the Sun?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            correctAnswer: "Mercury"
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["100°C", "90°C", "110°C", "120°C"],
            correctAnswer: "100°C"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            correctAnswer: "Au"
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
        const playerScore = calculateScore(correctAnswers);
        updateHighScores(playerName, playerScore);
        alert(`Quiz complete! Your score: ${playerScore}`);
        window.location.href = "index.html"; // Redirect to the homepage
    }
}

// Function to display quiz questions for a specific category
function displayQuizQuestions(category) {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear existing content

    const questions = quizCategories[category];
    if (!questions) {
        quizContainer.innerHTML = `<p>No questions available for this category.</p>`;
        return;
    }

    let correctAnswers = 0;

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

            // Add event listener to handle answer selection
            optionButton.addEventListener("click", () => {
                if (!optionButton.disabled) {
                    lockQuestionOptions(optionButton, optionsList, option, quiz.correctAnswer, questionElement);
                    if (option === quiz.correctAnswer) {
                        correctAnswers++;
                    }
                }
            });

            optionItem.appendChild(optionButton);
            optionsList.appendChild(optionItem);
        });

        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });

    // Add a "Finish Quiz" button
    const finishButton = document.createElement("button");
    finishButton.textContent = "Finish Quiz";
    finishButton.addEventListener("click", () => completeQuiz(correctAnswers));
    quizContainer.appendChild(finishButton);
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
    if (selectedOption === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        feedback.style.color = "red";
    }

    questionElement.appendChild(feedback);
}

// Initialize the quiz page with a default category
function initializeQuizPage() {
    const category = new URLSearchParams(window.location.search).get("category") || "GeneralKnowledge";
    displayQuizQuestions(category);
}

// Call the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initializeQuizPage);