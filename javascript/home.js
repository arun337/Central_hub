// Function to filter assessments by type
function filterAssessments() {
    const filter = document.getElementById('filterType').value;
    const assessments = document.getElementById('assessmentsList').getElementsByClassName('list-group-item');
    
    for (let i = 0; i < assessments.length; i++) {
        if (filter === 'all' || assessments[i].getAttribute('data-type') === filter) {
            assessments[i].style.display = '';
        } else {
            assessments[i].style.display = 'none';
        }
    }
}

// Function to search assessments by title or keywords
function searchAssessments() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const assessments = document.getElementById('assessmentsList').getElementsByClassName('list-group-item');

    for (let i = 0; i < assessments.length; i++) {
        const assessmentTitle = assessments[i].innerText.toLowerCase();
        if (assessmentTitle.includes(searchValue)) {
            assessments[i].style.display = '';
        } else {
            assessments[i].style.display = 'none';
        }
    }
}

// Function to sort assessments
function sortAssessments() {
    const sortOption = document.getElementById('sortOption').value;
    const assessmentsList = document.getElementById('assessmentsList');
    const assessments = Array.from(assessmentsList.getElementsByClassName('list-group-item'));

    assessments.sort((a, b) => {
        if (sortOption === 'date') {
            return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        } else if (sortOption === 'popularity') {
            return b.getAttribute('data-popularity') - a.getAttribute('data-popularity');
        } else if (sortOption === 'completion') {
            return b.getAttribute('data-completion') - a.getAttribute('data-completion');
        }
    });

    assessments.forEach(assessment => assessmentsList.appendChild(assessment));
}




document.getElementById('preview-assessment').addEventListener('click', function() {
    alert('Previewing the assessment...');
    // Preview logic
});

document.getElementById('create-assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData.entries()));
    alert('Assessment saved!');
    // Form submission logic
});


// scripts.js
document.getElementById('preview-assessment').addEventListener('click', function() {
    alert('Previewing the assessment...');
    // Add preview logic here
});

document.getElementById('create-assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData.entries()));
    alert('Assessment saved!');
    // Add form submission logic here
   
});
document.getElementById('publish-assessment').addEventListener('click', () => {
    window.location.href = 'question-bank.html'; // Redirect to the assessment taking page
});
