//some more complex things using functions


function hello(arr, number) {
    arr.push(number);
    return arr.shift();

}
var aam = [1, 2, 3];

console.log(JSON.stringify(aam));
console.log(hello(aam, 4));
console.log(JSON.stringify(aam))