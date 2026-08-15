fetch("https://api.example.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ age: 19 }),
});

// setting state with useState
