let random = Math.random();
let first;

let second;
let third;

if (random < 0.33) {
  second = "Fire";
} else if (random > 0.33 && random < 0.66) {
  second = "Garments";
} else {
  second = "Hub";
}

if (random < 0.33) {
  first = "Crazy";
} else if (random > 0.33 && random < 0.66) {
  first = "Engine";
} else {
  first = "Bros";
}

if (random < 0.33) {
  third = "Limited";
} else if (random > 0.33 && random < 0.66) {
  third = "Foods";
} else {
  third = "Amazing";
}
console.log(first + third + second);
