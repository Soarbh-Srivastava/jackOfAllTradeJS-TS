let age = 10;
{
  let age = 100;
  console.log(age); //100
}

var name = "soarbh";
{
  let name = "soarbh";
  console.log(name); //soarbh
}

// let Lname = "srivastava";
// {
//   var Lname = "Kumar";
//   console.log(Lname);
// }

let count = 5;

function somename() {
  var count = 10;
  console.log(count); // This is perfectly legal!
}

somename();
console.log(count);
