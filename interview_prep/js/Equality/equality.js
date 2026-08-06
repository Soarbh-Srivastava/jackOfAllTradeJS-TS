console.log(NaN === NaN); // false
console.log(+0 === -0); // true
console.log(NaN == NaN); // false
console.log(+0 == -0); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

const arr = [NaN, +0];

console.log(arr.includes(NaN)); // true
console.log(arr.includes(+0)); // true
