// what are function?
// it structure code into reuseable part 

//declaration

//This is function
function sayHello(){
    console.log("Hello! ")
}
// This is function calling
sayHello()//Hello;

//function use return to send back value

//when we return something i can be store in a variable

function sayNamaste(){
    return "Namaste!";
}
//each function call reset the local value in the function
let greeting  = sayNamaste();

console.log(greeting);

// passing parameter
function myFunc(param1, param2){
    // some compute with param
    return param1+param2;
}

console.log(myFunc(1,2));

// Anonymous Function

// a function without declaration
// no name lone wolf 
const hello = function (name){
    const message = `hello ${name}`;
    return message;
}
console.log(hello("soarbh"));


// Arrow function

const myFunction = (param1, param2) => {
    return param1+param2;
}
console.log(myFunction(1,"4"))

