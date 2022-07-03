let introduceEl = document.getElementById('introduce-el');
let introduce = ['Hello', 'my name is'];
// This first for loop does not have 'Nelly!'
// This is because javascript reads from top to bottom
// for (i = 0; i < introduce.length; i++) {
//   introduceEl.textContent = introduce[i];
// }
let myName = ['Nelly!'];
introduce.push(myName);
// This for loop does have 'Nelly!'
for (i = 0; i < introduce.length; i++) {
  introduceEl.textContent += introduce[i] + ' ';
}

let bibleEl = document.querySelector('#bible-el');
let genesis = {
  // An item inside of an object is called a "Key"
  author: 'Moses',
  chapters: '50',
  wisdom: true,
  tribes: [
    'Asher',
    'Dan',
    'Ephraim',
    'Gad',
    'Issachar',
    'Manasseh',
    'Nephatali',
    'Reuben',
    'Simeon',
    'Zebulun',
    'Judah',
    'Benjamin',
  ],
  // A function inside of an object is called a "Method"
  eden: function () {
    console.log('The Garden of Eden');
  },
};
bibleEl.textContent = genesis.author + ' ' + genesis.wisdom;

let booleanEl = document.getElementById('boolean-el');
let age = 10;
if (age >= 21) {
  booleanEl.textContent = 'You are old enough!';
} else if (age < 21) {
  booleanEl.textContent = 'You are NOT old enough!';
}

let kingEl = document.querySelector('#king-el');
let royalty = true;
let wisdom = true;
// Using the && (AND) operator both must be true
if (royalty === true && wisdom === true) {
  kingEl.textContent = 'The Wise Man may speak to the king!';
} else {
  kingEl.textContent = 'OFF WITH HIS HEAD!';
}

let wiseEl = document.getElementById('wise-el');
let wiseMessage = false;
let kingHappy = false;
function kingIsAngry() {
  let message = 'The king is not pleased!';
  wiseEl.textContent = message;
}
// Using the || (OR) operator only one must be true
if (wiseMessage === true || kingHappy === true) {
  wiseEl.textContent = 'The king is pleased';
} else {
  kingIsAngry();
}

let compareEl = document.getElementById('compare-el');
function comparing() {
  return (message = '20 < 10 is false / 20 >= 19 is false');
}
compareEl.textContent = comparing();

let logicEl = document.getElementById('logic-el');
logicEl.textContent = '&& means (AND) || means (OR) ! means (NOT)';

let loopsEl = document.getElementById('loops-el');
// This loop will count from 10 to 100 in tens!
for (let i = 10; i < 101; i += 10) {
  loopsEl.textContent += i + ' ';
}

let numbersEl = document.querySelector('#numbers-el');
// Grab a random number from 1 to 3
let randomNumber = Math.floor(Math.random() * 3) + 1;
numbersEl.textContent = randomNumber;
// Math.random() gives you a random decimal point number
let decimalNumber = Math.random();
console.log(decimalNumber);
// Math.floor() converts a decimal number to a whole number
let wholeNumber = Math.floor(3.3242);
console.log(wholeNumber);

let returnEl = document.querySelector('#return-el');
let returnNumber = Math.floor(Math.random() * 8) + 1;
function lucky() {
  message = 'You got the lucky number!';
  returnEl.textContent = message;
}
if (returnNumber === 8) {
  lucky();
}
