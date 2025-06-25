# Odin Calculator

A no-frills JavaScript calculator that does what you expect—nothing more, nothing less. Chain operations, handle decimals, and get a polite error if you try to divide by zero.

## Features
- **Basic math**: + – × ÷  
- **Chained calculations**: keep going after you get a result  
- **Decimal support**: because life isn’t always whole numbers  
- **Divide-by-zero check**: throws “Cannot divide by zero you squeeb!” instead of crashing  
- **Clear button**: reset in one click  

## Setup
1. Clone or download this repo.  
2. Open `index.html` in your browser.  
3. Just visit the page https://micjaggs.github.io/Calculator/
_No build tools, no extra steps—just click and calculate._

## Usage
1. Click number buttons to enter your first operand.  
2. Click an operator (+ – × ÷).  
3. Enter your second operand.  
4. Click `=` to see the result.  
5. Want more? Click another operator to continue chaining.  
6. Hit **C** to clear and start over.  

## Behind the Scenes
All the logic lives in `script.js`:
- **State**: `currentNumber`, `previousNumber`, `operatorSelected`, `shouldResetScreen`  
- **Handlers**:  
  - `handleNumber()` — builds numbers (up to 9 digits + decimal)  
  - `handleOperator()` — stores and chains operations  
  - `calculate()` — wraps math in `try/catch`  
- **Math functions**: `add()`, `subtract()`, `multiply()`, `divide()` (with zero-check)  
- **UI updates**: `updateDisplay()`, `clearScreen()`

That’s it. Happy calculating!  
