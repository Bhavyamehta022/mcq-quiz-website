import { questionBank } from "./utils/constants.js";
const question = document.getElementById("question");
const trueCheck = document.getElementById("true");
const falseCheck = document.getElementById("false");
const scoreElement = document.getElementById("score");
const ans = document.getElementById("ans");
const timerElement = document.getElementById("timer");
let i = 0;
let score = 0;
function showNextQuestion() {
  question.textContent = questionBank[i].question;
  startTimer();
  setTimeout(() => {
    calculateScore(i);
    ++i;
    trueCheck.checked = false;
    falseCheck.checked = false;
    showNextQuestion();
  }, 10000);
}
function calculateScore(i) {
  score =
    (trueCheck.checked && questionBank[i].answer === true) ||
    (falseCheck.checked && questionBank[i].answer === false)
      ? score + 5
      : score;
  console.log(score);
  scoreElement.textContent = `Your Score: ${score}`;
  const text = String(questionBank[i].answer).toUpperCase();
  ans.textContent = `Answer: ${text}`;
}
function startTimer() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      timerElement.textContent = `Timer: ${i}`;
    }, i * 1000);
  }
}
showNextQuestion();





