//Object

//Object are like entity that has some property

//Declaration
//Way 1
const pencil = {
    type : "HB6",
    color : "black",
    brand : "Dooms"
}

console.log(pencil.type);
console.log(pencil.color)

// we can change the property of object outside
pencil.type = "hb2"

console.log(`I use a ${pencil.type} of ${pencil.brand}`)

// we will take eg of a rpg game
// can add methos or other object in property of object
const aurora = {
    name : "aurora",
    maxHealth : 100,
    strength : 25,
    des(){
        return (`${aurora.name} has ${aurora.maxHealth} health with stregth of ${aurora.strength}`)
    }
};
console.log(`${aurora.name} has health of ${aurora.maxHealth} and strength ${aurora.strength}`)

console.log("aurora  encounter a trap")
aurora.maxHealth -= 25;

console.log("Aurora got a mythral sword")
aurora.strength += 10;

aurora.des()
console.log(aurora.des())
