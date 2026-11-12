import http from "http";
import express from "express";

// this is hard way to make a server
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.writeHead(200);
    res.end("Hello World");
  }
});

server.listen(3000);

// express

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(3000);
