// scripts.js

// Add New Question Button
document.getElementById('add-new-question').addEventListener('click', function() {
    alert('Redirecting to add new question page...');
    // Add logic to redirect to the question creation tool
});

// Edit and Delete Question Actions
document.querySelectorAll('.actions button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.toLowerCase();
        const questionText = this.closest('li').querySelector('span').textContent;
        
        if (action === 'edit') {
            alert(`Editing: ${questionText}`);
            // Add edit logic here
        } else if (action === 'delete') {
            if (confirm(`Are you sure you want to delete: ${questionText}?`)) {
                this.closest('li').remove();
                alert('Question deleted.');
            }
        }
    });
});

// Import and Export Questions
document.getElementById('import-questions').addEventListener('click', function() {
    alert('Importing questions...');
    // Add logic to import questions
});

document.getElementById('export-questions').addEventListener('click', function() {
    alert('Exporting questions...');
    // Add logic to export questions
});

// Search Functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const questions = document.querySelectorAll('#question-list li');
    questions.forEach(question => {
        const text = question.textContent.toLowerCase();
        question.style.display = text.includes(query) ? '' : 'none';
    });
});

// Filter Functionality
document.querySelectorAll('.filters select').forEach(select => {
    select.addEventListener('change', function() {
        const type = document.getElementById('filter-type').value.toLowerCase();
        const difficulty = document.getElementById('filter-difficulty').value.toLowerCase();
        const subject = document.getElementById('filter-subject').value.toLowerCase();

        const questions = document.querySelectorAll('#question-list li');
        questions.forEach(question => {
            const text = question.textContent.toLowerCase();
            const matchesType = type ? text.includes(type) : true;
            const matchesDifficulty = difficulty ? text.includes(difficulty) : true;
            const matchesSubject = subject ? text.includes(subject) : true;

            question.style.display = matchesType && matchesDifficulty && matchesSubject ? '' : 'none';
        });
    });
});
document.getElementById('add-new-question').addEventListener('click', () => {
    window.location.href = 'home.html'; // Redirect to the assessment taking page
});
