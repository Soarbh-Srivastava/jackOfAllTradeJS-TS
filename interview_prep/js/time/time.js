// month trap
// we want to create nov 5,2024
const wrongDate = new Date(2024, 11, 5);
console.log(wrongDate);

const rightDate = new Date(2024, 10, 5);
console.log(rightDate);

// timestamp

const rightNow = Date.now();
console.log(rightNow);

// local vs UTC vs ISO
const myDate = new Date("2024-12-25T12:00:00Z");
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
