// It help define where a varible can be accessed in a program

// ----------------Local and Global Scope --------------------

// globle scope varible can be access anywhere in this file

let  e = 5;

function f(){
    // this is a local scope can be access inside the function only
    let g = 10;
    console.log(e+g)
}

f();

// ---------------- Block and Lexical Scope --------------------


//block scope varible (let or const) can be access in that block only {}
// varible declare inside a function and can be use in side that block or nested block is called lexical scope
function a(){
    let y = 11; //local scope
    {
    let x = 10
    console.log(x)// Block Scope
    }
    function b(){
        console.log(y)// Lexical Scope
    }
    b()
}
a();



// ---------------- Modular Scope --------------------
// file1.js
// export const PI = 3.14

// file2.js
// import {PI} from "file1.js"
