console.log("1 execution starts");
setTimeout(() => {
  console.log("2 time out");
}, 1000);
Promise.resolve().then(() => console.log("3 Microtask execute"));
console.log("4. exection end");
