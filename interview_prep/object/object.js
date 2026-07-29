let myObj = {};
let myArr = [1, 2, 3];

myObj[myArr] = "hello";
console.log(myObj["1,2,3"]);

const secretObj = {};
Object.defineProperty(secretObj, "hiddenKey", {
  value: "Secret",
  // Notice we didn't specify writable, enumerable, or configurable.
  // Because we used defineProperty, they all default to FALSE!
});

secretObj.hiddenKey = "New Secret";
secretObj.hiddenKey = "New Secret"; // ❌ Fails silently (or throws in strict mode)
console.log(Object.keys(secretObj)); // Outputs: [] (It's not enumerable!)

//---1 perventExtension

const user = { name: "soarbh" };
Object.preventExtensions(user);

user.name = "bob"; // will work
delete user.name; // will work
user.age = 28; //fail

//---2 Shallow Copy vs Deep Copy

const orignal = {
  name: "soarbh",
  stats: { level: 1 },
};
//shallow copy
const shallow = Object.assign({}, orignal);
//deep copy
const deep = structuredClone(orignal);
// lets mutate the nested object in copies
shallow.stats.level = 99;
deep.stats.level = 50;
console.log(orignal.stats.level);
// 🚨 Outputs 99! The shallow copy accidentally mutated the original object
// because they share the same memory pointer for the 'stats' object.
// The deep copy's '50' is safely isolated!

//--Spread

const arr1 = [1, 2];
const merged = [...arr1, 3, 4];
console.log(merged); // [1,2,3,4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2); // {a:1,b:2}

//-- Destructing
const users = { name: "Alice", age: 30, admin: { status: true } };
const { name: Username } = users; // we renaming the name to username
console.log(Username); // Alice

const { name, ...other } = users;
console.log(name); // Alice
console.log(other); // {age:30,admin{status:true}}
