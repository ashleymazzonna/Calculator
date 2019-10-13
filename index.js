/**************************
 *** CALCULATOR NUMBERS ***
 *************************/
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
/******************************
 *** CALCULATOR OPERATORS ***
 ****************************/
const times = document.getElementById('multiply');
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');

const backBtn = document.getElementById('back-btn');
const clearBtn = document.getElementById('clear-btn');
const equalBtn = document.getElementById('equals');

/**************ANSWER *********/
let answerEl = document.getElementById('answer');

const numberBtns = document.getElementsByClassName('number-btn');
const operatorBtns = document.getElementsByClassName('operator-btn');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

const updateDisplayVal = (clickedObj) => {
    let btnText = clickedObj.target.innerText;

    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    answerEl.innerText = displayVal;

}

for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', updateDisplayVal, false);
};

// for (let i = 0; i < operatorBtns.length; i++) {
//     operatorBtns[i].addEventListener('click', , false);
// };


clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    answerEl.innerHTML = '0';
}

backBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    answerEl.innerText = displayVal;

    if (displayVal === '')
        displayVal = '0';

    answerEl.innerText = displayVal;


}











