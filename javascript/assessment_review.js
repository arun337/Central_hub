// Example JavaScript to handle basic interactions and data

document.getElementById('retake-assessment').addEventListener('click', () => {
    window.location.href = 'assessment_taking.html'; // Redirect to the assessment taking page
});

document.getElementById('download-feedback').addEventListener('click', () => {
    alert('Downloading feedback...');
    // Implement download feedback functionality
});

// Example data
const feedbackData = [
    {
        question: 'What is 2+2?',
        yourAnswer: '4',
        correctAnswer: '4',
        explanation: '2 + 2 equals 4.'
    },
    {
        question: 'Explain gravity.',
        yourAnswer: 'Gravity is...',
        correctAnswer: 'Gravity is the force...',
        explanation: 'Gravity is the force...'
    }
];

const historyData = [
    { attempt: 1, score: '80%', feedback: 'Good effort.' },
    { attempt: 2, score: '85%', feedback: 'Improved understanding.' }
];

// Populate feedback section
const feedbackList = document.getElementById('feedback-list');
feedbackData.forEach(item => {
    feedbackList.innerHTML += `
        <div class="feedback-item">
            <h3>Question: ${item.question}</h3>
            <p>Your Answer: ${item.yourAnswer}</p>
            <p>Correct Answer: ${item.correctAnswer}</p>
            <p>Explanation: ${item.explanation}</p>
        </div>
    `;
});

// Populate submission history section
const historyList = document.getElementById('history-list');
historyData.forEach(item => {
    historyList.innerHTML += `
        <div class="submission-entry">
            <p>Attempt ${item.attempt}: Score: ${item.score} - Feedback: ${item.feedback}</p>
        </div>
    `;
});
document.getElementById('download-feedback').addEventListener('click', () => {
    window.location.href = 'home.html'; // Redirect to the assessment taking page
});