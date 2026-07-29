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

function* basicGenrator() {
  console.log("First step");
  yield "First step completed";
  console.log("Second step");
  yield "Second step completed";
  console.log("Third step");
  yield "Finsied";
}
const gen = basicGenrator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// async function
// async function fetchUser() {
//   const res = await fetch(
//     "https://api.example.com/user](https://api.example.com/user",
//   );
//   const data = await res.json();
//   console.log(data);
// }
// fetchUser();

function Player(name, level) {
  this.name = name;
  this.level = level;
}
let p2 = Player("soarbh", 1);
let p1 = new Player("soarbh", 1);

console.log(p1.name);
console.log(p2.name); //TypeError: Cannot read properties of undefined (reading 'name')
