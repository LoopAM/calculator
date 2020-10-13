// DOM elements
const displayArea = document.getElementById("display-area");

const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const zeroBtn = document.getElementById("zero-btn");

const divideBtn = document.getElementById("divide-btn");
const multBtn = document.getElementById("mult-btn");
const subtractBtn = document.getElementById("subtract-btn");
const addBtn = document.getElementById("add-btn");

const clearBtn = document.getElementById("clear-btn");

// Basic calculator functions
function add(e) {
  firstNum = parseFloat(displayArea.value);
  e.target.style.backgroundColor = "gold";
}

function subtract() {
  firstNum = parseFloat(displayArea.value);
  return num1 - num2;
}

function multiply() {
  firstNum = parseFloat(displayArea.value);
  return num1 * num2;
}

function divide(e) {
  if (displayArea.value === "") {
    return;
  }
  firstNum = parseFloat(displayArea.value);
  operation = e.target.value;
  e.target.style.backgroundColor = "gold";
  console.log(firstNum);
}

// Clear display area of all text and operations
function clear() {
  displayArea.value = "";
  firstNum = 0;
  divideBtn.style.backgroundColor = "darkgoldenrod";
  multBtn.style.backgroundColor = "darkgoldenrod";
  subtractBtn.style.backgroundColor = "darkgoldenrod";
  addBtn.style.backgroundColor = "darkgoldenrod";
}

// Add numbers to the display area
function displayNumber(e) {
  const buttonValue = e.target.value;
  displayArea.value = displayArea.value + buttonValue;
}

// Take the number that is currently in the display area, take the operation button that was just clicked, and compute the result after another number is inputted.
let firstNum = 0;
let operation = "";
function operate() {
  displayArea.value = firstNum 
}

// Attach event listeners
clearBtn.addEventListener("click", clear);

oneBtn.addEventListener("click", displayNumber);
twoBtn.addEventListener("click", displayNumber);
threeBtn.addEventListener("click", displayNumber);
fourBtn.addEventListener("click", displayNumber);
fiveBtn.addEventListener("click", displayNumber);
sixBtn.addEventListener("click", displayNumber);
sevenBtn.addEventListener("click", displayNumber);
eightBtn.addEventListener("click", displayNumber);
nineBtn.addEventListener("click", displayNumber);
zeroBtn.addEventListener("click", displayNumber);

divideBtn.addEventListener("click", divide);