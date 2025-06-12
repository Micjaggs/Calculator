// Link HTML elements to JS
const screenDisplay = document.querySelector("#screen")
const clearBtn = document.querySelector(".clear")
const numberBtn = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")

// Initialize values
let currentNumber = ""

// Create function to print user selections to calculator screen

let userSelection = numberBtn.forEach(button => {
    button.addEventListener('click', event => {
        handleNumber(event.target.textContent)
        screenDisplay.textContent = currentNumber
    })
})

//Create a function to handle the selected number

function handleNumber(num) {
    if (currentNumber.length <= 5)
    currentNumber += num
}

