let prom1 = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random > 0.5) {
    setTimeout(() => {
      console.log("I have successfully executed.1");
      resolve("Aamir1");
    }, 1500);
  } else {
    reject("I am rejected.1");
  }
});

let prom2 = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random > 0.5) {
    setTimeout(() => {
      console.log("I have successfully executed 2.");
      resolve("Aamir2");
    }, 2000);
  } else {
    reject("I am rejected.2");
  }
});

let prom3 = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random > 0.5) {
    setTimeout(() => {
      console.log("I have successfully executed.3");
      resolve("Aamir3");
    }, 2500);
  } else {
    reject("I am rejected.3");
  }
});

let prom4 = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random > 0.5) {
    setTimeout(() => {
      console.log("I have successfully executed.4");
      resolve("Aamir4");
    }, 1000);
  } else {
    reject("I am rejected. 4");
  }
});

let prom5 = Promise.all([prom1, prom2, prom3, prom4]);
prom5
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });

let prom6 = Promise.allSettled([prom1, prom2, prom3, prom4]);
prom6
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });

let prom7 = Promise.race(prom1, prom2, prom3, prom4);
prom7
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });

let prom8 = Promise.resolve([prom1, prom2, prom3, prom4]);
prom8
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });

let prom9 = Promise.reject([prom1, prom2, prom3, prom4]);
prom9
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
