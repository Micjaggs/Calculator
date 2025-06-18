// Trying to figure out why the equals button isn't pushing the result to the screen


// Link HTML elements to JS
const screenDisplay = document.querySelector("#screen")
const mainNumber = document.querySelector("#current-number")
const secondaryNumber = document.querySelector("#previous-number")
const clearBtn = document.querySelector(".clear")
const numberBtn = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const equalBtn = document.querySelectorAll(".equal")

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

// //FIX ---> Create function to move current number to previous number when operator is selected

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
    if (currentNumber === 0 && num != ".") {
        currentNumber = num
    } else if (currentNumber.length <= 9)
        return currentNumber += num
}

// Function for operator selection

function handleOperator(op) {
    if (currentNumber === "") return; 
    operatorSelected = op
    previousNumber = currentNumber
    updateDisplay()
    currentNumber = ""
}

// Function to do the math
function calculate(currentNumber, previousNumber) {
    if (previousNumber === "" || currentNumber === "") return;
    let currentNumberFLoat = parseFloat(currentNumber)
    let previousNumberFloat = parseFloat(previousNumber)
    let result

    switch(operatorSelected) {
        case "+":
            result = add(currentNumberFLoat, previousNumberFloat)
            break;
        case "-":
            result = subtract(currentNumberFLoat, previousNumberFloat)
        case "*":
            result = multiply(currentNumberFLoat, previousNumberFloat)
        case "/":
            result = divide(currentNumberFLoat, previousNumberFloat)

    }
    currentNumber = result
    updateDisplay()
}
//   // Make sure we have everything we need
//   IF previousNumber is empty OR currentNumber is empty, THEN
//     STOP
//   END IF

//   // Convert number strings to actual numbers
//   DEFINE number1 = convert previousNumber to a number
//   DEFINE number2 = convert currentNumber to a number
//   DEFINE theResult

//   // Figure out which math to do
//   SWITCH operatorSelected:
//     CASE '+': SET theResult = number1 + number2
//     CASE '-': SET theResult = number1 - number2
//     CASE 'x': SET theResult = number1 * number2
//     CASE '÷':
//       IF number2 is 0, THEN
//         SHOW ERROR "Cannot divide by zero"
//         CALL clearScreen()
//         STOP
//       ELSE
//         SET theResult = number1 / number2
//       END IF
//   END SWITCH

//   // Update the state with the result
//   SET currentNumber = theResult
//   SET operatorSelected = null
//   SET previousNumber = "" // Clear the holding spot
// END FUNCTION

// Functions for maths

function add(currentNumber, previousNumber) {
    return currentNumber + previousNumber
}

function subtract(currentNumber, previousNumber) {
    return currentNumber - previousNumber
}

function multiply(currentNumber, previousNumber) {
    return currentNumber * previousNumber
}

function divide(currentNumber, previousNumber) {
    return currentNumber / previousNumber
}

 