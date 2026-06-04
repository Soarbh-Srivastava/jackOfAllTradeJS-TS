// map() operation
// map() takes an array as a paramenter and create a new array with the result of calling 
// a provide a function on every element in this array

const num = [1,2,3,4,5];

const double = num.map( x=> x*2);
console.log(num);
console.log(double);

// filter() operation
// offer a way to test evert element of an array against a provided function

const bigThan3 =  num.filter(x=> x>3);
console.log(bigThan3)