// Get the screen element
const screen = document.getElementById("screen");

// Append value to the screen
function appendValue(value) {
  if (screen.value === "Error") clearScreen(); // Clear screen if there's an error
  screen.value += value;
}

// Append operator to the screen
function appendOperator(operator) {
  if (screen.value !== "" && !isOperator(screen.value.slice(-1))) {
    screen.value += " " + operator + " ";
  }
}

// Check if the last character is an operator
function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char.trim());
}

// Clear the screen
function clearScreen() {
  screen.value = "";
}

// Perform the calculation
function calculate() {
  try {
    // Trim leading and trailing spaces
    const trimmedExpression = screen.value.trim();
    
    // Prevent division by zero
    if (trimmedExpression.includes("/ 0")) {
      screen.value = "Error";
    } else {
      const result = eval(trimmedExpression); // Using eval to evaluate the expression
      saveToHistory(trimmedExpression + " = " + result);
      screen.value = result;
    }
  } catch (error) {
    screen.value = "Error";
  }
}

// Save calculations to history
function saveToHistory(calculation) {
  const historyList = document.getElementById("history");
  const listItem = document.createElement("li");
  listItem.textContent = calculation;
  historyList.appendChild(listItem);
}
