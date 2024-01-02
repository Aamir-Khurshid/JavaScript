let random = Math.random();

let boxes = document.getElementsByClassName("box");

if (random < 0.33) {
  boxes[0].style.color = "blue";
  boxes[0].style.backgroundColor = "pink";

  boxes[1].style.color = "red";
  boxes[1].style.backgroundColor = "pink";

  boxes[2].style.color = "yellow";
  boxes[2].style.backgroundColor = "red";

  boxes[3].style.color = "gray";
  boxes[3].style.backgroundColor = "black";

  boxes[4].style.color = "aqua";
  boxes[4].style.backgroundColor = "yellow";
} else if (random >= 0.33 && random < 0.66) {
  boxes[1].style.color = "blue";
  boxes[1].style.backgroundColor = "pink";

  boxes[3].style.color = "red";
  boxes[3].style.backgroundColor = "pink";

  boxes[4].style.color = "yellow";
  boxes[4].style.backgroundColor = "red";

  boxes[0].style.color = "gray";
  boxes[0].style.backgroundColor = "black";

  boxes[2].style.color = "aqua";
  boxes[2].style.backgroundColor = "yellow";
} else {
  boxes[4].style.color = "blue";
  boxes[4].style.backgroundColor = "pink";

  boxes[2].style.color = "red";
  boxes[2].style.backgroundColor = "pink";

  boxes[0].style.color = "yellow";
  boxes[0].style.backgroundColor = "red";

  boxes[1].style.color = "gray";
  boxes[1].style.backgroundColor = "black";

  boxes[3].style.color = "aqua";
  boxes[3].style.backgroundColor = "yellow";
}
