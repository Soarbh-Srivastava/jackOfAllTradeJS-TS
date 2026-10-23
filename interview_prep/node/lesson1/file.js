import fs from "node:fs/promises";
import FS from "node:fs";

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("end");

// using readfile
async function loadConfig() {
  const content = await fs.readFile("data.txt", "utf-8");
  return JSON.parse(content);
}

//using createReadStream
const stream = FS.createReadStream("data.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {});

stream.on("error", console.error);

// to solve backpressure issue we can use pipe

const source = FS.createReadStream("someLargeZIP.zip");
const destination = FS.createWriteStream("copyz.zip");

source.pipe(destination);

destination.on("finish", () => {
  console.log("File copied successfully.");
});

source.on("finish", () => {
  console.log("copy completed");
});

source.on("error", console.error);
destination.on("error", console.error);
