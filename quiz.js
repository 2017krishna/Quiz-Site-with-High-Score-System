const quizQuestions = [ // Array of quiz questions
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    }
];

function displayQuizQuestions() { // Function to display quiz questions
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear existing content

    quizQuestions.forEach((quiz, index) => {
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
            optionButton.addEventListener("click", () => checkAnswer(option, quiz.correctAnswer));
            optionItem.appendChild(optionButton);
            optionsList.appendChild(optionItem);
        });

        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
}

function checkAnswer(selectedOption, correctAnswer) { // Function to check the answer
    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong answer. Try again!");
    }
}

function initializeQuizPage() { // Initialize the quiz page
    displayQuizQuestions();
}

document.addEventListener("DOMContentLoaded", initializeQuizPage); // Wait for the DOM to load before initializing the quiz page