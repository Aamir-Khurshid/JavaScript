let button = document.querySelector(".btn");

// A function can be passed if the passed event takes place.

// Double click - dblclick
// Right Click - contextmenu

document.addEventListener("contextmenu", () => {
  alert("Hacker Hackerrrrrrrrrrrr");
  button.innerHTML = "Kaun h bhai tu";
});

button.addEventListener("click", () => {
  button.innerHTML = "Aamir Khurshid";
  alert("I was Clicked");
});

button.addEventListener("contextmenu", () => {
  button.innerHTML = "Aamir Khurshid";
  alert("It was a Right Clicked");
});

button.addEventListener("dblclick", () => {
  button.innerHTML = "Aamir Khurshid";
  alert("It was a double Click");
});
