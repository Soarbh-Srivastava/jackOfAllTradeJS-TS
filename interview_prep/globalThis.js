var myVar = "This is global var";
let myLet = "This is myLet";

// browser way
// console.log(window.myVar);
// console.log(window.myLet);

//modern way

console.log(globalThis.myVar);
console.log(globalThis.myLet);
