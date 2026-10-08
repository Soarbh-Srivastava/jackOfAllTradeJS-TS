import fs from "node:fs";

const data = fs.readFileSync("");

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now(),
};

console.log(newNote);
