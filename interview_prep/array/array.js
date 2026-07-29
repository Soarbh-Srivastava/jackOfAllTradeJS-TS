const num = [1, 2, 3, 4];

// map
const numSq = num.map((n) => n * n);
console.log(numSq); // [1,4,9,16]

//filter

const even = num.filter((n) => n % 2 == 0);
console.log(even); // [2,4]

// reduce

const sum = num.reduce((acc, curr) => acc + curr);
console.log(sum); // 10

// every
const isPositive = num.every((n) => {
  console.log("check for positive number");
  if (num > 0) return true;
});
console.log(isPositive);

// -- Some

const Age = [10, 12, 18, 20];
const isAdult = Age.some((age) => age >= 18);

console.log(isAdult); // true

// -- flat
const messyArr = [1, 2, 3, [1, 2, [3, 4, [5]]]];
console.log(messyArr.flat()); // [1, 2, 3,1, 2, [3, 4, [5]]]
console.log(messyArr.flat(Infinity)); // [1,2,3,1,2,3,4,5]

// -- flatMap
const sentence = ["Hello world", "Js prep"];
console.log(sentence.flatMap((sentence) => sentence.split(" ")));

// -- find

const usersList = [
  { id: 1, name: "bob" },
  { id: 2, name: "soarbh" },
];

const findBob = usersList.find((bob) => bob.name === "bob");
console.log(findBob); // {id:1,name:"bob"}

const findIdxBob = usersList.findIndex((bob) => bob.id === 1);
console.log(findIdxBob); // 0
