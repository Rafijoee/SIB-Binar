const os = require('os')
const fs = require('fs')

const sabrina = require ('./create.js')
const luasSegitiga = require('./segitiga.js')

console.log(sabrina)

console.log('free memory :', os.freemem())
console.log('hello world !')

console.log(luasSegitiga(10, 5)) // 25

