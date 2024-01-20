let a = prompt("Enter number 1");
let b = prompt("Enter second number");
let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {
  // To create a error from users side.
  throw SyntaxError("Enter numbers my friend");
}

// To catch an error we use try catch

try {
  alert("The sum is", sum * c); // Reference error as c is not defined
} catch (error) {
  console.log("Kuch to garbar h daya", error);
  alert(error.name);
  alert(error.stack);
  alert(error.message);
} finally {
  console.log("All Done");
}
