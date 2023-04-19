const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
// lines 1 - 4, we create a constant to equal the "id" tags we want to target 

let currentQuestion = 0 ;
// line 7 is used to declare that the current question the the first question of the array.

let score = 0;
// line 11 start the score at 0

function displayQuestion() {
    const question = quizData[currentQuestion];
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map(answer => `
                <li>
                    <input type="radio" name="answer" value="${answer}">
                    ${answer}
                </li>
            `).join('')}
        </ul>
    `;
}

function getSelectedAnswer() {
    const answerInputs = document.getElementsByName('answer');
    let selectedAnswer = '';
    answerInputs.forEach(input => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
}

nextBtn.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        questionContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    }
});

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    questionContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
    const percentageScore = Math.round(score / quizData.length * 100);
    resultContainer.innerHTML = `You scored ${percentageScore}% (${score}/${quizData.length})`;
    resultContainer.style.display = 'block';
});
