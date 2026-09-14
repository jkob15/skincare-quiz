const buttons = document.querySelectorAll('.buttons');
const next = document.querySelectorAll('.next');


buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
})

function showQuestion(questionNumber) {
    // hide all quiz containers first
    const containers = document.querySelectorAll('.quiz-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // show specific container
    const targetContainer = document.getElementById('q' + questionNumber + '-container');
    if (targetContainer) {
        targetContainer.style.display = 'block';
    }
}

// loop through each question container to keep their behaviors seperate
document.querySelectorAll('.quiz-container').forEach(container => {
    const answerButtons = container.querySelectorAll('.buttons');
    const nextButton = container.querySelector('.next');

    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. remove the 'selected' class from all buttons inside this question
            answerButtons.forEach(btn => btn.classList.remove('selected'));
            
            // 2. add 'selected' class to the clicked button so the user sees their choice
            button.classList.add('selected');
            
            // 3. unlock the next button for this question
            if (nextButton) {
                nextButton.disabled = false;
            }
        });
    });
});
