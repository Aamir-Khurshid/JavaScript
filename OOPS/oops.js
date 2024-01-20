let aamir = {
  age: "21",
  height: "170",
};

let human = {
  gender: "male",
  breathe: "oxygen",
};

// __proto__ is used to set a prototype.
// For Ex. - all the properties of human will be inherited by aamir
aamir.__proto__ = human;

console.log(aamir);
console.log(aamir.gender);

// Using Classses

class Jack {
  constructor() {
    console.log("Object is created>>>");
  }
  eats() {
    console.log("Khana khata hu m");
  }
}
class Lion extends Jack {
  constructor() {
    super();
    console.log("Thik h");
  }
  runs() {
    console.log("Bari tej");
  }

  // Setters and getters
  get age() {
    this.age = age;
  }
  set age(age) {
    if (age < 18) {
      console.log("You are underage my friend");
    }
    this.age = age;
  }
}

let aamirk = new Lion();
aamirk.name = "Aamir";
aamirk.runs();
console.log(aamirk.name);
