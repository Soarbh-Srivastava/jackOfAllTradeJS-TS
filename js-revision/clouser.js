function outer() {
  let outerVar = "This is outer var";
  function inner() {
    console.log(outerVar);
    outerVar = "Updated";
  }
  return inner;
}
const clouser = outer();
clouser();
clouser();
