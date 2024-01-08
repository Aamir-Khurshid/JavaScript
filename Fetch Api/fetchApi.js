/* Way 1 to fetch
async function hello() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
  return 555;
}
*/
// Way 2 to fetch
async function hello() {
  let x = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return 555;
}

async function main() {
  console.log("Aamir1");
  console.log("Aamir2");
  console.log("Aamir3");

  let data = await hello().then((a) => {
    console.log(a);
  });
  console.log("Aamir4");
  console.log("Aamir5");
}
main();
