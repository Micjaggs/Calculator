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

// Function to handle the selected number

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

// Function for handling interim chained calculations

function compute(a, op, b) {
    let curr = parseFloat(a);
    let prev = parseFloat(b); 
    switch (op) {
        case "+": return curr + prev
        case "-": return prev - curr
        case "x": return prev * curr
        case "/": return prev / curr
        default: curr
    }
}


// Function for operator selection

function handleOperator(op) {
    if (currentNumber === "") return; 
    if (currentNumber !== "" && previousNumber !== "") {
        let interim = compute(currentNumber, operatorSelected, previousNumber)
        previousNumber = interim.toString()
        updateDisplay()
    } else previousNumber = currentNumber;
    operatorSelected = op
    currentNumber = ""
    updateDisplay()
}

// Function to calculate
function calculate() {
    if (previousNumber === "" || currentNumber === "") return;
    let computation
    
try {

    switch(operatorSelected) {
        case "+":
            computation = add(currentNumber, previousNumber)
            break;
        case "-":
            computation = subtract(currentNumber, previousNumber)
            break;
        case "x":
            computation = multiply(currentNumber, previousNumber)
            break;
        case "/":
            computation = divide(previousNumber, currentNumber)
            break;
    }
    currentNumber = computation.toString()

} catch(e) {

    currentNumber = e.message
}

    operatorSelected = null
    previousNumber = ""
    shouldResetScreen = true
    updateDisplay()
}

//Maths functions

function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
    return  parseFloat(a) - parseFloat(b) 
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function divide(b, a) {
    const divisor = parseFloat(a)
    if (divisor === 0) {
        throw new Error ("Cannot divide by zero you squeeb!")
    }
    return parseFloat(b) / divisor
}


 