const CURRENTYEAR = 2023;
const SUCCESSMESSAGE = "Выбран верный год";
const ERRORMESSAGE = "Выбран неверный год";

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function () {
    const currentUserValue = Number(inputNode.value);

    if (!currentUserValue) {
        return;
    }

    let output = SUCCESSMESSAGE;

    if (currentUserValue !== CURRENTYEAR) {
        output = ERRORMESSAGE;
    }

    outputNode.innerHTML = output;

})