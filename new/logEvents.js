
// const {v4:uuid}=require('uuid')


// const {format} =require('date-fns')
// const path = require('path');
// const fsPromises=require('fs').promises;
// const logEvents= async (message)=>{
// const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
// const logItem=`${dateTime}\t${uuid()}\t${message}`;
// await fsPromises.appendFile(path.join(__dirname,'new','all-logs.txt'),logItem)
// }


// module.exports=logEvents;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logEvents = (msg) => {
  const logFilePath = path.join(__dirname, 'log.txt');
  const logMessage = `${msg}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) throw err;
    console.log('Log event appended to file.');
  });
};

export default logEvents;
