// need to write logic that make the operator act as the calculator button
//if it's selected after a num an op and a num are selected

// Link HTML elements to JS
const screenDisplay = document.querySelector("#screen")
const mainNumber = document.querySelector("#current-number")
const secondaryNumber = document.querySelector("#previous-number")
const clearBtn = document.querySelector(".clear")
const numberBtn = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const equalBtn = document.querySelector(".equal")

// Initialize values
let currentNumber = ""
let previousNumber = ""
let operatorSelected = null
let shouldResetScreen = false
let result = ""

// Button to clear screen
clearBtn.addEventListener('click', clearScreen)

// Create function to print user selections to calculator screen

numberBtn.forEach(button => {
    button.addEventListener('click', event => {
        handleNumber(event.target.textContent)
        updateDisplay()
    })
})

//function to move current number to previous number when operator is selected

operator.forEach(button => {
    button.addEventListener('click', event => {
        handleOperator(event.target.textContent)
    })
})

//Event listener to trigger calculate

equalBtn.addEventListener('click', calculate)

//Function to clear display

function clearScreen() {
    currentNumber = ""
    previousNumber = ""
    operatorSelected = null
    shouldResetScreen = false
    updateDisplay()
}

// Function to update display

function updateDisplay() {
    mainNumber.textContent = currentNumber
    if (operatorSelected != null && previousNumber != "") {
        secondaryNumber.textContent = `${previousNumber} ${operatorSelected}`
    } else secondaryNumber.textContent = ""
}

// Create a function to handle the selected number

function handleNumber(num) {
    if (shouldResetScreen) {
        currentNumber = "";
        shouldResetScreen = false
    }
    if (num == "." && currentNumber.includes(".")) return;
    if (currentNumber === 0 && num !== ".") {
        currentNumber = num
    } else if (currentNumber.length <= 9) {
        return currentNumber += num
    }
}

// Function for operator selection

function handleOperator(op) {
    if (currentNumber === "") return; 
    operatorSelected = op
    previousNumber = currentNumber
    currentNumber = ""
    updateDisplay()
}

// Function to calculate
function calculate() {
    if (previousNumber === "" || currentNumber === "") return;
    let currentNumberFLoat = parseFloat(currentNumber)
    let previousNumberFloat = parseFloat(previousNumber)
    let computation

    switch(operatorSelected) {
        case "+":
            computation = add(currentNumberFLoat, previousNumberFloat)
            break;
        case "-":
            computation = subtract(currentNumberFLoat, previousNumberFloat)
            break;
        case "x":
            computation = multiply(currentNumberFLoat, previousNumberFloat)
            break;
        case "/":
            computation = divide(previousNumberFloat, currentNumberFLoat)
            break;
    }
  
    currentNumber = computation.toString()
    operatorSelected = null
    previousNumber = ""
    shouldResetScreen = true
    updateDisplay()
}

//Maths functions

function add(currentNumber, previousNumber) {
    return parseFloat(currentNumber) + parseFloat(previousNumber)
}

function subtract(currentNumber, previousNumber) {
    return  parseFloat(currentNumber) - parseFloat(previousNumber) 
}

function multiply(currentNumber, previousNumber) {
    return parseFloat(currentNumber) * parseFloat(previousNumber)
}

function divide(previousNumber, currentNumber) {
    return parseFloat(previousNumber) / parseFloat(currentNumber)
}


 