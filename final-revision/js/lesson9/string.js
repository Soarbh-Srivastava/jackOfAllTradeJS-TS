// String
// it represent test 
// declare with "", '' or ``
// string are immutable in js

// geting length
console.log("ajsadns".length);
// or
const str = "dsadasd";
console.log(str.length)

// upper case coversion
console.log(str.toUpperCase());

//lower case conversion
console.log(str.toLowerCase())

// comparing two string 
let word  = "soarbh";
console.log(word === "soarbh");
console.log(word === "kmassdfksa");


// * string as set of charater
for(let i =0;i<word.length;i++){
    console.log(word[i])
}

// for of use
console.log("For-of")

for(const letter of word){
    console.log(letter)
}

// manipulating String
// bulding array of char to manuplate a string

console.log("foreach")
const wordArray = Array.from(word);
wordArray.forEach(e =>{
    console.log(e)
})

// sometime string is need to be seprate
console.log("split")
const someNum = "1,2,3,4,5,6,7";
console.log(someNum.split(","))

// index of help search for some value. 
// if found inside the string, 
// it return index of the first occurence of the value, 
// Otherwise it return -1;
console.log(someNum.indexOf("4"))

// endWith() and startWith() return true or false 
// based on string start or end with given 