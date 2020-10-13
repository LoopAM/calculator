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
const decimalBtn = document.getElementById("decimal-btn");

const equalBtn = document.getElementById("equate-btn");

// Operation function to populate operation variable with correct operator. Returns nothing if no number has been inputted or another operator has been selected
function addOperation(e) {
  if (displayArea.value === "") {
    return;
  }
  if (displayArea.value && operation) {
    operate();
  }
  firstNum = parseFloat(displayArea.value);
  operation = e.target.value;
  checkBool = true;
  e.target.style.backgroundColor = "#808000";
  decimalBtn.style.backgroundColor = "";
}

// Clear display area of all text and operations
function clear() {
  displayArea.value = "";
  firstNum = 0;
  operation = "";
  divideBtn.style.backgroundColor = "";
  multBtn.style.backgroundColor = "";
  subtractBtn.style.backgroundColor = "";
  addBtn.style.backgroundColor = "";
  decimalBtn.style.backgroundColor = "";
}

// Add numbers to the display area
function displayNumber(e) {
  if (checkBool) {
    displayArea.value = "";
    checkBool = false;
  }
  displayArea.value = displayArea.value + e.target.value;
  resetOperatorButtons();
}

function displayDecimal() {
  if (checkBool) {
    displayArea.value = "";
    checkBool = false;
  }
  if (!displayArea.value) {
    displayArea.value = 0.;
  }
  if (displayArea.value.includes(".")) {
    return;
  }
  displayArea.value = displayArea.value + ".";
  decimalBtn.style.backgroundColor = "#303030";
  resetOperatorButtons();
}

// Take the number that is currently in the display area and store it in a variable. Take the operator selected and store it in a variable. After a second number is inputted and the equal button is clicked, the correct number is displayed and the result is stored in the first variable.
let firstNum = 0;
let operation = "";
let checkBool = false;

function calcResult(num) {
  firstNum = num;
  operation = "";
  displayArea.value = num;
  resetOperatorButtons();
  decimalBtn.style.backgroundColor = "";
}

function operate() {
  const num1 = parseFloat(firstNum);
  const num2 = parseFloat(displayArea.value);
  const oper = operation;
  if (oper === "/") {
    if (num2 == 0) {
      firstNum = 0;
    }
    const result = (num1 / num2);
    calcResult(result);
  }
  if (oper === "*") {
    const result = (num1 * num2);
    calcResult(result);
  }
  if (oper === "-") {
    const result = (num1 - num2);
    calcResult(result);
  }
  if (oper === "+") {
    const result = (num1 + num2);
    calcResult(result);
  }
}

// Clear operator buttons of selection changes
function resetOperatorButtons() {
  divideBtn.style.backgroundColor = "";
  multBtn.style.backgroundColor = "";
  subtractBtn.style.backgroundColor = "";
  addBtn.style.backgroundColor = "";
}

// Attach event listeners
clearBtn.addEventListener("click", clear);
decimalBtn.addEventListener("click", displayDecimal);

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

divideBtn.addEventListener("click", addOperation);
multBtn.addEventListener("click", addOperation);
subtractBtn.addEventListener("click", addOperation);
addBtn.addEventListener("click", addOperation);

equalBtn.addEventListener("click", operate);

// Keyboard support
document.addEventListener("keydown", event => {
  event.preventDefault();
  const key = event.key;
  if (key === 'c') {
    clearBtn.click();
  }
  if (key === '.') {
    decimalBtn.click();
  }
  if (key === '1') {
    oneBtn.click();
  }
  if (key === '2') {
    twoBtn.click();
  }
  if (key === '3') {
    threeBtn.click();
  }
  if (key === '4') {
    fourBtn.click();
  }
  if (key === '5') {
    fiveBtn.click();
  }
  if (key === '6') {
    sixBtn.click();
  }
  if (key === '7') {
    sevenBtn.click();
  }
  if (key === '8') {
    eightBtn.click();
  }
  if (key === '9') {
    nineBtn.click();
  }
  if (key === '0') {
    zeroBtn.click();
  }
  if (key === "/") {
    divideBtn.click();
  }
  if (key === "*" || key === "x") {
    multBtn.click();
  }
  if (key === "-") {
    subtractBtn.click();
  }
  if (key === "+") {
    addBtn.click();
  }
  if (key === "Enter") {
    equalBtn.click();
  }
  if (key === "Backspace") {
    displayArea.value = displayArea.value.slice(0, -1);
  }
})