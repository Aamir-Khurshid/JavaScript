// Destructuring

// let x, y = [3, 4];  This will show error
// console.log(x, y);

let [x, y] = [3, 4];
console.log(x, y);

// First two values will be value of a and b and the remaining values will be assigned to rest
let [a, b, ...rest] = [3, 4, 6, 7, 8, 2];
console.log(a, b, rest);

let obj = {
  c: 1,
  d: 2,
};

let { c, d } = obj;

console.log(c, d);

let arr = [2, 2, 2, 2, 2];

// console.log(sum(arr[1],arr[2],arr[0])); // Long process
console.log(sum(...arr));
