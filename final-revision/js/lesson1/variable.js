// Variable is something that store the data
//imagine it as a box in which you can store the things

//declaring the varible
// --------declare let----------
let a;
console.log(a); //undefined

// value in varible can change for let
let x = 10;
x = 2;
console.log(x) //2


// _ can be use , to easly read big value
let y =  10_00_00_000;
console.log(y) //100000000


// --------declare const----------

// It is use to declare a varible whoes value will not change
// for eg: value of pi: 3.14

// const a = 3.14;
// a = 1;
// console.log(a); // Syntax Error : Identifier 'a' has already been declared

// -------- Increment and decrement ----------

let z = 0;
z += 1;
console.log(z); // 1

z++; // at this point b contain 1
console.log(z); // here it we 2

// -------- Varible Scope ----------

let num1 = 0;
{
    num1 = 1; // ok num1 is declare in parent
    const num2 =0
}
console.log(num1) // 1
console.log(num2) // ReferenceError: num2 is not defined 