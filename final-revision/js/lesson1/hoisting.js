// refers to behaviour of variable, function and classes to top of 
// their scope during compliation phase.

x = 1;
console.log(x+=x);
var x;

// tzd (temporal dead zone)
// this period in js between entering a scope and the intialization of the variable declare 
// with let and const, during which accessing them cause the reference error;

// y = 1;
// console.log(y+1);
// let y;

hello();//hello
function hello ()  {
    console.log("hello")
}

hello();
var hello =()=>  {
    console.log("hello")
}
//typeError

