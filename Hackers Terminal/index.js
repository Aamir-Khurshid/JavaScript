let body = document.body;
body.style.color = "green";
body.style.background = "black";
async function output() {
  Initializing();
  reading();
  password();
  sending();
  cleaning();
}
output();
async function Initializing() {
  let p1 = document.createElement("p");
  let x = "Initializing Hacking";
  setTimeout(() => {
    setInterval(() => {
      p1.innerHTML = x + ".";
    }, 700);
    setInterval(() => {
      p1.innerHTML = x + "..";
    }, 1400);
    setInterval(() => {
      p1.innerHTML = x + "...";
    }, 2100);
  }, 0);

  body.append(p1);
}

async function reading() {
  let p2 = document.createElement("p");
  let y = "Reading Your Files";
  setTimeout(() => {
    setInterval(() => {
      p2.innerHTML = y + ".";
    }, 700);
    setInterval(() => {
      p2.innerHTML = y + "..";
    }, 1400);
    setInterval(() => {
      p2.innerHTML = y + "...";
    }, 2100);
  }, 2100);

  body.append(p2);
}
async function password() {
  let p3 = document.createElement("p");
  let z = "Password files Detected";
  setTimeout(() => {
    setInterval(() => {
      p3.innerHTML = z + ".";
    }, 700);
    setInterval(() => {
      p3.innerHTML = z + "..";
    }, 1400);
    setInterval(() => {
      p3.innerHTML = z + "...";
    }, 2100);
  }, 4200);
  body.append(p3);
}

async function sending() {
  let p4 = document.createElement("p");
  let a = "Sending all passwords and personal files to server";
  setTimeout(() => {
    setInterval(() => {
      p4.innerHTML = a + ".";
    }, 700);
    setInterval(() => {
      p4.innerHTML = a + "..";
    }, 1400);
    setInterval(() => {
      p4.innerHTML = a + "...";
    }, 2100);
  }, 6300);

  body.append(p4);
}

async function cleaning() {
  let p5 = document.createElement("p");
  let b = "Cleaning Up";
  setTimeout(() => {
    setInterval(() => {
      p5.innerHTML = b + ".";
    }, 700);
    setInterval(() => {
      p5.innerHTML = b + "..";
    }, 1400);
    setInterval(() => {
      p5.innerHTML = b + "...";
    }, 2100);
  }, 8400);

  body.append(p5);
}
