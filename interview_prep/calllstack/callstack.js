function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

square(5);

function inspection(i) {
  i++;
  console.log("inspection", i);

  return inspection(1);
}

inspection();
