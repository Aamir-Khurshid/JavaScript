// Targeting using ClassName.
let box = document.getElementsByClassName("box");
box[2].style.backgroundColor = "red";

// Targeting using IdName.
document.getElementById("box3").style.backgroundColor = "red";

//Targeting using QuerySelector.
document.querySelector(".box").style.color = "red";

let boxes = document.querySelectorAll(".box"); //Returns Node List
boxes.forEach((box) => {
  box.style.color = "red";
});

//Target Using TagName
document.getElementsByTagName("div");
