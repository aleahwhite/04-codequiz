let timer;

document.addEventListener('DOMContentLoaded', function () {

    const startButton = document.getElementById('start-button');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.querySelectorAll('.answer-option')
    const resultText = document.getElementById('result-text');
    const messageEl = document.getElementById('message');
    const saveScoreButton = document.getElementById('save-button');
    const timerEl = document.getElementById('timer');
    const timeRemainingEl = document.getElementById('time-remaining');

    let currentQuestionIndex = 0;
    let score = 0;

    const quizQuestions = [

        {
            question: "What are the three primary colors?",
            answerOptions: ['Red, Yellow, Green', 'Red, Yellow, Blue', 'Red, Orange, Yellow'],
            correctAnswer: 'Red, Yellow, Blue'
        },

        {
            question: "What color does Red and Blue make?",
            answerOptions: ['Green', 'Pink', 'Purple'],
            correctAnswer: 'Purple'
        },

        {
            question: "How many colors are in the rainbow?",
            answerOptions: ['Seven', 'Eight', 'Nine'],
            correctAnswer: 'Seven'
        },

        {
            question: "Which one is a warm color?",
            answerOptions: ['Orange', 'White', 'Green'],
            correctAnswer: 'Orange'
        },

        {
            question: "What two colors are complimentary to each other?",
            answerOptions: ['Red & Blue', 'Green & Orange', 'Purple & Yellow'],
            correctAnswer: 'Purple & Yellow'
        },
    ];

    function startQuiz() {
        startButton.classList.add('hide');
        questionContainer.classList.remove('hide');
        timer = startTimer();
        displayQuestion();
    }

    function displayQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answerOptions[index];
            button.onclick = () => checkAnswer(currentQuestion.answerOptions[index]);
        });
    }

    function checkAnswer(answer) {
        const currentQuestion = quizQuestions[currentQuestionIndex];

        if (answer === currentQuestion.correctAnswer) {
            messageEl.textContent = "Correct Answer!! Keep up the good work :)";
        }
        else {
            timer -= 5;
            messageEl.textContent = "Wrong Answer:( -5 seconds!";
            timeRemainingEl.textContent = timer;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        }
        else {
            endQuiz();
        }
    }

    function startTimer() {
        let timeRemaining = 60;
        timer = setInterval(() => {
            timeRemaining--;
            timeRemainingEl.textContent = timeRemaining;
            if (timeRemaining <= 0) {
                endQuiz();
            }
        }, 1000);
        return timeRemaining;
    }

    function endQuiz() {
        clearInterval(timer);
        questionContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        resultText.textContent = 'Quiz Over!!!! Your score is the amount of time left!!';
        saveScoreButton.onclick = () => saveScore();
    }

    function saveScore() {
        const initials = prompt('Enter initials and time left');
        alert('score saved')
    }


    startButton.onclick = startQuiz;
});
