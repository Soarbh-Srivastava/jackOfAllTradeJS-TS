console.log(sayHello());

function sayHello() {
  return "hello";
}

// hello(); // Reference Error
// let hello = function () {
//   return "hello";
// };

setTimeout(function () {
  console.log("hello");
}, 1000);

const multiply = (a, b) => a * b;
console.log(multiply(1, 2));

//Named function expression

let mathFactorical = function Factorial(n) {
  if (n <= 1) return 1;
  return n * Factorial(n - 1);
};

console.log(mathFactorical(5));

//callback function

function sayhi(name) {
  console.log("Hi!", name);
}

function processUser(callback) {
  let user = "alex";
  sayhi(user);
}
processUser(sayhi);

let externalNum = 0;

function impureAdd(amount) {
  externalNum += amount;
  return externalNum;
}
function pureAdd(a, b) {
  return a + b;
}
