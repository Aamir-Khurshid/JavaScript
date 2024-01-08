// Callback is a method to pass a function as an argument to another function.
// It helps to manage when to execute the function.

const callback = (arg) => {
  alert(arg);
};

const fun = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Aamir");
  document.head.append(sc);
};

fun("https://www.google.com", callback);
