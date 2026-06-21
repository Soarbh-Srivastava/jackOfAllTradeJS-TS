// Type conversion can be implicit if result from a expression as it happen automatically
const a = 10;
console.log("variable f contain the value "+a) // result is a string

// if a value fail to convert into number it is NAN

const b= "one" - 1;
const c= "one" + 1; 

console.log(b) // NAN
console.log(c) // one1

const d = "5"
console.log(d+5) // 55

// js have String() and Number which can use to convert values
const e = Number(d);
console.log(e+5)// 10

// it has one more thing called bool conversion. 
// this could be use to convert Number and String into boolean and vice verse

const string = 'soarbh';
let boolString = Boolean(string);
console.log(boolString) // true

const number = 150;
let boolNum = Boolean(number);
console.log(boolNum) // true
