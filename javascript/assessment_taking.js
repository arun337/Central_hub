// Example JavaScript to handle basic functionality

// Variables for demonstration
let currentQuestionIndex = 0;
const questions = [
    // Example questions
    { question: "What is 2+2?", type: "multiple-choice", options: ["3", "4", "5"], correct: "4" },
    { question: "Explain gravity.", type: "essay" }
];

// Timer setup
let timerDuration = 60 * 15; // 15 minutes in seconds
let timerInterval;

function startTimer() {
    const timerElement = document.getElementById('timer-count');
    timerInterval = setInterval(() => {
        timerDuration--;
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            // Handle time up logic (e.g., automatically submit the assessment)
        }
    }, 1000);
}

// Load current question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionDisplay = document.getElementById('question-display');
    const answerInputs = document.getElementById('answer-inputs');
    
    questionDisplay.innerHTML = `<h3>${question.question}</h3>`;
    
    answerInputs.innerHTML = ''; // Clear previous inputs
    
    if (question.type === 'multiple-choice') {
        question.options.forEach(option => {
            answerInputs.innerHTML += `<label><input type="radio" name="answer" value="${option}"> ${option}</label><br>`;
        });
    } else if (question.type === 'essay') {
        answerInputs.innerHTML += '<textarea name="answer" rows="5" cols="40"></textarea>';
    }
}

// Navigation buttons
document.getElementById('prev-question').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

document.getElementById('next-question').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

// Save progress button
document.getElementById('save-progress').addEventListener('click', () => {
    alert('Progress saved!');
    // Implement save progress logic
});

// Submit assessment button
document.getElementById('submit-assessment').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Assessment submitted!');
    // Implement submit assessment logic
});
document.getElementById('submit-assessment').addEventListener('click', () => {
    window.location.href = 'assessment_review.html'; // Redirect to the assessment taking page
});

// Load the first question and start the timer
window.onload = () => {
    loadQuestion();
    startTimer();
};
