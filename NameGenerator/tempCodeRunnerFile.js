let adjectives = {
  0: "Crazy",
  1: "Ammazing",
  2: "Fire",
};
let shopName = {
  0: "Engine",
  1: "Foods",
  2: "Garments",
};
let anotherWord = {
  0: "Bros",
  1: "Limited",
  2: "Hub",
};
for (let i = 0; i > adjectives.length; i++) {
  for (let j = 0; i > shopName.length; i++) {
    for (let k = 0; i > anotherWord.length; i++) {
      console.log(adjectives[i] + shopName[j] + anotherWord[k]);
    }
  }
}
