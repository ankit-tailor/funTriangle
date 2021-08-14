const InputangleOfTriagnle = document.querySelectorAll('.angleOfTriagnle');
const resultContent = document.querySelector('.resultContent');
const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let sum = 0;

    for (i = 0; i < InputangleOfTriagnle.length; i++) {
        sum += Number(InputangleOfTriagnle[i].value);
    }

    if (sum === 180) {
        resultContent.innerHTML = "woahh!! these angles can make a triangle";
    }
    else {
        resultContent.innerHTML = "Oopsss! these angles can't make a triangle";
    }
});