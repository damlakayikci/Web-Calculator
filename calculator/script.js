// Display the number values on the screen when clicked
function display(val) {
  document.getElementById("textval").value += val;
}

// Evaluate the result in the screen when '=' button is clicked
function evaluateResult() {
  let x = document.getElementById("textval").value;
  let y = eval(x);
  document.getElementById("textval").value = y;
}

// Clear the screen when 'clear' button is clicked
function clr() {
  document.getElementById("textval").value = "";
}
