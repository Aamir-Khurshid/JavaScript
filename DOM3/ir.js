//document.querySelector(".box").innerHTML = "Began";

//document.querySelector(".box").innerText = "Aye Began";

// check whether it has the attribute or not
document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style");
document.querySelector(".box").setAttribute("style", "display:flex");

let div = document.createElement("div");
div.innerHTML = " I am created by Aamir";

document.querySelector(".container").append(div);
