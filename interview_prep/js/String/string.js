const text = "Hello World";

console.log(text.slice(-5)); // last World
console.log(text.substring(-5)); // -ve will become 0 and whole thing will be printed

// the swapping trick
console.log(text.substring(5, 0)); // (swap 5,0 -> 0,5)
console.log(text.substr(5, 0)); // "" slice dont swap

// substr
console.log(text.substr(0, 5)); //hello

// replace

const phrase = "I like cats, Are cats cool?";
const newPhrase = phrase.replace("cats", "dogs"); //only replace one occurence
console.log(newPhrase); // I like dogs, Are cats cool?

// the pro fix
const allReplace = phrase.replace(/cats/g, "dogs");
// phrase.replaceAll("cats","dogs")
console.log(allReplace);

// split
const text = "apple, banana, cherry";
console.log(text.split(",")); // ["apple","banana","cherry"]
console.log("hello".split("")); //["h","e","l","l","o"]

// trim
const sloopyInput = "  hello world      ";
console.log(sloopyInput.trim()); //"hello world"]

// match
