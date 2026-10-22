// import fs from "node:fs";
// console.log("start");
// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("end");

// console.log("1");

// process.nextTick(() => {
//   console.log("2 - nextTick");
// });

// Promise.resolve().then(() => {
//   console.log("3 - Promise");
// });

// setTimeout(() => {
//   console.log("4 - timeout");
// }, 0);

// setImmediate(() => {
//   console.log("5 - immediate");
// });

// console.log("6");

// console.log("Start");

// process.nextTick(() => {
//   console.log("Tick 1");

//   process.nextTick(() => {
//     console.log("Tick 2");
//   });

//   Promise.resolve().then(() => {
//     console.log("Promise inside Tick 1");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("Promise 1");

//   process.nextTick(() => {
//     console.log("Tick inside Promise 1");
//   });

//   Promise.resolve().then(() => {
//     console.log("Promise 2");
//   });
// });

// setTimeout(() => {
//   console.log("Timer");
// }, 0);

// console.log("End");

//==================
//=== Nested  ====
//==================

console.log("Start");

process.nextTick(() => {
  console.log("Tick 1");

  process.nextTick(() => {
    console.log("Tick 2");
  });

  Promise.resolve().then(() => {
    console.log("Promise inside Tick 1");
  });
});

Promise.resolve().then(() => {
  console.log("Promise 1");

  process.nextTick(() => {
    console.log("Tick inside Promise 1");
  });

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
});

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
