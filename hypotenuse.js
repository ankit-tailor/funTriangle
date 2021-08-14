const form = document.querySelector('.form');
const InputangleOfTriagnle = document.querySelectorAll('.angleOfTriagnle');
const resultContent = document.querySelector('.resultContent');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let sum = 0;

    for (i = 0; i < InputangleOfTriagnle.length; i++) {
        sum += Number(InputangleOfTriagnle[i].value) * Number(InputangleOfTriagnle[i].value);
    }

    const calculatedHypotenuse = Math.sqrt(sum)
    resultContent.innerHTML = `Hypotenuse is ${calculatedHypotenuse}.`
});