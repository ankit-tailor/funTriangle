const rightAnwsers = ["option1", "option1", "option1", "option3", "option2"]

const formQuiz = document.forms[0];
const showScore = document.querySelector('.score')

formQuiz.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(formQuiz);
    let index = 0, score = 0;
    for (let entry of data) {
        if (entry[1] == rightAnwsers[index]) {
            score++;
        }
        index++;
    }
    showScore.innerHTML = `Your score is ${score}`;
})