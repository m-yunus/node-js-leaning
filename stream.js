const fs=require('fs')

const rs = fs.createReadStream('./files/starter.txt');

// Create a writable stream to another file
const ws = fs.createWriteStream('./files/test.txt');

// Pipe the readable stream to the writable stream
rs.pipe(ws);