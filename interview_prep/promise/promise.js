const pSuccess = Promise.resolve("Success!");
const pFail = Promise.reject("Failed!");
const pSlow = new Promise((res) => setTimeout(() => res("Slow Success"), 1000));

// --- 1. THE CHAINING / RECOVERY TRAP ---
Promise.resolve("A")
  .then((res) => {
    throw new Error("B"); // Throws an error!
  })
  .catch((err) => {
    console.log("Caught:", err.message); // Prints: Caught: B
    return "C"; // Returning a value here RECOVERS the chain!
  })
  .then((res) => {
    console.log("Next:", res); // Prints: Next: C
  });

// --- 2. PROMISE.ALL vs PROMISE.ALLSETTLED ---
// Promise.all (Fails instantly because of pFail)
Promise.all([pSuccess, pSlow, pFail])
  .then((res) => console.log(res))
  .catch((err) => console.log("All Error:", err)); // Prints: All Error: Failed!

// Promise.allSettled (Waits for all 3, regardless of failure)
Promise.allSettled([pSuccess, pSlow, pFail]).then((res) => console.log(res));
// Prints array: [{status: "fulfilled", value: "Success!"}, {status: "fulfilled", value: "Slow..."}, {status: "rejected", reason: "Failed!"}]

// --- 3. PROMISE.RACE vs PROMISE.ANY ---
// Promise.race (pFail is instant, so it wins the race and rejects!)
Promise.race([pFail, pSlow]).catch((err) => console.log("Race Result:", err)); // Prints: Race Result: Failed!

// Promise.any (pFail is instant, but .any() ignores failures! It waits for pSlow)
Promise.any([pFail, pSlow]).then((res) => console.log("Any Result:", res)); // Prints (after 1s): Any Result: Slow Success

async function getNumber() {
  return 5;
}

console.log(getNumber());
getNumber().then((num) => console.log(num));
//this is test id contribution is getting added
