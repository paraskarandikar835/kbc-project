// ✅ Array of quiz questions and answers
const questions = [
  {
    question: "What is the largest planet in our Solar System?",
    answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
    correct: 1
  },
  {
    question: "Who wrote the Indian national anthem?",
    answers: [
      "Rabindranath Tagore",
      "Mahatma Gandhi",
      "Bankim Chandra Chatterjee",
      "Subhash Chandra Bose"
    ],
    correct: 0
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["G", "Au", "Ag", "Go"],
    correct: 1
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Venus", "Mercury", "Earth", "Mars"],
    correct: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo"
    ],
    correct: 0
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correct: 0
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: ["Europe", "Australia", "Antarctica", "South America"],
    correct: 1
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    answers: [
      "Marie Curie",
      "Mother Teresa",
      "Rosalind Franklin",
      "Ada Lovelace"
    ],
    correct: 0
  },
  {
    question: "Which gas is essential for us to breathe?",
    answers: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correct: 0
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "Which is the longest river in the world?",
    answers: ["Amazon", "Nile", "Yangtze", "Ganga"],
    correct: 1
  },
  {
    question: "Who invented the light bulb?",
    answers: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Isaac Newton"
    ],
    correct: 1
  },
  {
    question: "Which is the national animal of India?",
    answers: ["Peacock", "Tiger", "Elephant", "Lion"],
    correct: 1
  },
  {
    question: "Which is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Platinum"],
    correct: 2
  },
  {
    question: "How many colors are there in a rainbow?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "Who was the first Indian to go into space?",
    answers: [
      "Rakesh Sharma",
      "Kalpana Chawla",
      "Sunita Williams",
      "Vikram Sarabhai"
    ],
    correct: 0
  },
  {
    question: "Which planet is known for its rings?",
    answers: ["Mars", "Jupiter", "Saturn", "Uranus"],
    correct: 2
  },
  {
    question: "What is the boiling point of water at sea level (°C)?",
    answers: ["90", "100", "110", "120"],
    correct: 1
  },
  {
    question: "Who was the first Prime Minister of India?",
    answers: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel",
      "Dr. Rajendra Prasad"
    ],
    correct: 1
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["Japan", "China", "Thailand", "Korea"],
    correct: 0
  },
  {
    question: "Which organ pumps blood through the human body?",
    answers: ["Brain", "Heart", "Lungs", "Liver"],
    correct: 1
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      "Louis Pasteur",
      "Alexander Fleming",
      "Isaac Newton",
      "Albert Einstein"
    ],
    correct: 1
  },
  {
    question: "What is the main source of energy for Earth?",
    answers: ["The Moon", "The Sun", "The Stars", "Volcanoes"],
    correct: 1
  },
  {
    question: "Which country hosted the 2024 Olympic Games?",
    answers: ["Tokyo", "Paris", "Los Angeles", "London"],
    correct: 1
  },
  {
    question: "What is the square of 15?",
    answers: ["200", "210", "225", "250"],
    correct: 2
  }
];

// ✅ Select elements from HTML
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// ✅ Start quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next ➡️";
  showQuestion();
}

// ✅ Show question
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.textContent = `${questionNo}. ${currentQuestion.question}`;

  // Add answer buttons
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(index));
    answerButtons.appendChild(button);
  });
}

// ✅ Reset UI for new question
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

// ✅ Handle answer selection
function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button, index) => {
    if (index === currentQuestion.correct) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
    button.disabled = true;
  });

  if (selectedIndex === currentQuestion.correct) {
    score++;
  }

  nextButton.style.display = "block";
}

// ✅ Handle next button click
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

// ✅ Show final score
function showScore() {
  resetState();
  questionElement.textContent = `🎯 You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again 🔁";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}

// ✅ Start quiz automatically
startQuiz();
