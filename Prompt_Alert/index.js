let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let operation = prompt("Enter the operation");

let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};

if (random > 0.1) {
  alert(`The result is ` + eval(`${a} ${operation} ${b}`));
} else {
  operation = obj[operation];
  alert(`The result is ` + eval(`${a} ${operation} ${b}`));
}
