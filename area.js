const form = document.querySelector('.form');
const InputangleOfTriagnle = document.querySelectorAll('.angleOfTriagnle');
const resultContent = document.querySelector('.resultContent');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let sum = 1;

    for (i = 0; i < InputangleOfTriagnle.length; i++) {
        sum *= Number(InputangleOfTriagnle[i].value);
    }

    const area = 1 / 2 * (sum)
    resultContent.innerHTML = `The area of triangle is ${area} cm<sup>2</sup>.`
});