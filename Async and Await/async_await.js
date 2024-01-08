// await can only be used inside async funcion.

function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successfully Executed");
    }, 2000);
  });
}

async function main() {
  console.log("Aamir1");
  console.log("Aamir2");
  console.log("Aamir3");

  /* If await was not used all the next lines would have been executed and not waited for data,
 but await is used so first data will be executed then the next lines will be executed.*/

  let data = await hello().then((a) => {
    console.log(a);
  });
  console.log("Aamir4");
  console.log("Aamir5");
}
main();
