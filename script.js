// ---------- Data ----------
const questions = [
  {
    key: "skinType",
    text: "What is your skin type?",
    answers: ["Normal", "Oily", "Dry", "Combination", "Sensitive", "I'm not sure"]
  },
  {
    key: "concern",
    multi: "true",
    text: "What is your skin concern?",
    answers: ["Acne", "Dark spots", "Dull complexion", "Dark eye circles", "Pores", "Redness", "Textured skin", "Fine lines/wrinkles", "Anti-aging", "Clogged pores"]
  },
  {
    key: "routine",
    text: "How many steps would you like your routine to be?",
    answers: ["1", "2-3", "4-5", "6+"]
  },
  {
    key: "budget",
    text: "What's your budget for the entire routine?",
    answers: ["Under $15", "$15-30", "$30-60", "$60+"]
  }
];

let current = 0;
const userAnswers = {};

// ---------- DOM ----------
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerList = document.getElementById('answer-list');
const nextBtn = document.getElementById('next-btn');

// ---------- Functions ----------
function renderQuestion() {
  const q = questions[current];
  questionText.textContent = q.text;
  answerList.innerHTML = '';
  nextBtn.disabled = true;

  q.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'buttons';
    btn.textContent = answer;

    btn.addEventListener('click', () => {
      answerList.querySelectorAll('.buttons').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      userAnswers[q.key] = answer;
      nextBtn.disabled = false;
    });

    answerList.appendChild(btn);
  });

  nextBtn.textContent = current === questions.length - 1 ? 'Finish' : 'Next';
}

function showResults() {
  quizContainer.innerHTML =
    '<div class="question"><p>Thank you for completing the quiz!</p></div>';
  console.log(userAnswers); // send this to the AI later
}

// ---------- Events ----------
btn.addEventListener('click', () => {
  if (q.multi) {
    btn.classList.toggle('active');
    userAnswers[q.key] = [...answerList.querySelectorAll('.active')]
      .map(b => b.textContent);
    nextBtn.disabled = userAnswers[q.key].length === 0;
  } else {
    answerList.querySelectorAll('.buttons').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    userAnswers[q.key] = answer;
    nextBtn.disabled = false;
  }
});

// ---------- Start ----------
renderQuestion();