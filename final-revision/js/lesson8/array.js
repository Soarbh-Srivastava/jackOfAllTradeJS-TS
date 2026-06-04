// Arrays are object type in js, it has key value pair {0:value,1:value ...}
// Array in js are hetrogenous

// creating a Array

const crazyList = ["jhon wick","Harry Potter: the soccer stong",123,424,true,false, {message : "hello"}]
const emptyArr = [];
console.log(crazyList.length); // 7
console.log(emptyArr.length);
console.log(crazyList[3]);


//iterating over an array

for(let i = 0;i<crazyList.length;i++){
    console.log(crazyList[i])
}

console.log("For each loop")

//foreach loop
crazyList.forEach(myelement  => console.log(myelement))


//for of
// it help deal wtih itrable object 
console.log("For-of loop")
for (const myElement of crazyList){
    console.log(myElement)
}


// array method

// add new to last of array
crazyList.push("GhostBuster");
console.log(crazyList)

// add to very start
crazyList.unshift("IT")
console.log(crazyList)

// remove the last element
crazyList.pop();
console.log(crazyList)

// (0,3) remove 3 element starting from 0 to 1,2
crazyList.splice(0,3)
console.log(crazyList)