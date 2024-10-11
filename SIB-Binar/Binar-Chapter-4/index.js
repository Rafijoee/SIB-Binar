const os = require("os");
const fs = require("fs");

// const luasSegitiga = require("./segitiga.js");

// console.log("free memory :", os.freemem());
// console.log("hello world !");

// console.log(luasSegitiga(10, 5)); // 25

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!, ini adalah halaman utama"));

app.listen(port, () => console.log(`Example app listening at port http://localhost:${port}!`));
