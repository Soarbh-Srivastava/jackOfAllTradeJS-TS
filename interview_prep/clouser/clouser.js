const { text } = require("express");

function createBankAcc(intialBalance) {
  let balance = intialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return `deposited balance: ${amount}, new balance : ${balance}`;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = createBankAcc(100);
console.log(myAccount.balance); //undefined : missing property in js give undefineds
console.log(myAccount.axy);
console.log(myAccount.deposit(50));
console.log(myAccount.getBalance());

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
} //3,3,3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
} //0,1,2
function outerFunc() {
  let outertext = "this current text";
  console.log(outertext);

  function innerFunc() {
    console.log(outertext);
    outertext = "updated";
  }

  return innerFunc;
}

let closure = outerFunc();

closure();
closure();
