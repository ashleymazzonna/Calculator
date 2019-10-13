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
const answerEl = document.getElementById('answer');

const numberBtns = document.getElementsByClassName('number-btn');
const operatorBtns = document.getElementsByClassName('operator-btn');

let currentDisplay = '0';
let pendingNum;
let evalStringArray = [];

const updateDisplay = (clickedObj) => {
    let btnsText = clickedObj.target.innerHTML; 
    
    if (currentDisplay === '0')
        currentDisplay = ' ';
    
    currentDisplay += btnsText;
    answerEl.innerHTML = currentDisplay;

}

for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', updateDisplay, false);
};

// for (let i = 0; i < operatorBtns.length; i++) {
//     operatorBtns[i].addEventListener('click', , false);
// };










