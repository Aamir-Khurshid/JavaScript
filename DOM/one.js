let cont = document.body.childNodes[1];
console.log(cont);

//To access first child which is a element
console.log(cont.firstElementChild);

//To access first child
console.log(cont.firstChild);

//To access last child
console.log(cont.lastChild);

//To access last child which is a element
console.log(cont.lastElementChild);

//To do styling.
cont.firstElementChild.style.backgroundColor = "red";

//To get parent element.
console.log(cont.firstElementChild.parentElement);

//To access all child together which are element
console.log(cont.children);
