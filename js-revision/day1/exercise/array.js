// // Creating an Array and Initializing with Values
// let a = [1, 2, 3, 4, 5];
// let b = [6, 7, 8, 9];
// console.log("Original Array: " + a);
// a.splice(1, 2);
// console.log("After Removing 2 elements starting from index 1: " + a);

// let c = [...a, ...b];
// console.log(typeof a);
// console.log(a instanceof Array);

// console.log(a.concat(b));
// console.log(c);
// console.log(a.toString());
// let obj = { model: "Tesla" };
// console.log("model" in obj);
// console.log(obj.hasOwnProperty("model"));

let obj = { name: "Sourav", age: 23 };
for (let k in obj) {
  console.log(k + ": " + obj[k]);
}
