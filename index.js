import fs from 'fs';
import { format } from 'date-fns';
import EventEmitter from 'events';
import logEvents from './new/logEvents.js'; // Use .js extension for ES modules
import server from './server.js';
// Read file
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('./files/writere.txt', 'welcome to ooty', (err) => {
  if (err) throw err;

  // Append to file after writing
  fs.appendFile('./files/writere.txt', '\nwelcome to cave\n', (err) => {
    if (err) throw err;
  });
});

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg));

// Emit an event with a delay
setTimeout(() => {
  myEmitter.emit('log', `logged out at ${format(new Date(), 'yyyy/MM/dd HH:mm:ss')}`);
}, 2000);
console.log(server);