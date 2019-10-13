/**************************
 *** CALCULATOR NUMBERS ***
 *************************/
const zero = parseInt(document.getElementById('zero').innerHTML);
const one = parseInt(document.getElementById('one').innerHTML);;
const two = parseInt(document.getElementById('two').innerHTML);
const three = parseInt(document.getElementById('three').innerHTML);
const four = parseInt(document.getElementById('four').innerHTML);
const five = parseInt(document.getElementById('five').innerHTML);
const six = parseInt(document.getElementById('six').innerHTML);
const seven = parseInt(document.getElementById('seven').innerHTML);
const eight = parseInt(document.getElementById('eight').innerHTML);
const nine = parseInt(document.getElementById('nine').innerHTML);
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
const answer = document.getElementById('answer');

const numberBtns = document.getElementsByClassName('number-btn');
const operatorBtns = document.getElementsByClassName('operator-btn');

let currentDisplay = 0;
let pendingNum;


for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function () {
        alert('a number has been clicked')
    }, false);
};

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', () => {
        alert('an operator has been clicked')
    }, false);
};










