// the number and bigint cant be mix

let x = 1;
let y = 10n;
console.log(x + y);
//nan
console.log("apple" / 2); // nan
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(typeof NaN); // "number"

// object
const list = [1, 2, 3];
console.log(typeof list); //object
console.log(Array.isArray(list)); //true
