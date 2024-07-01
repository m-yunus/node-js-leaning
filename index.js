const fs=require('fs');
 //read file
fs.readFile('./files/starter.txt','utf8',(err,data)=>{
console.log(data);
if (err) throw err;
});

//write file

fs.writeFile('./files/writere.txt','welcome to  ooty ',(err)=>{
    if (err) throw err;
})
fs.appendFile('./files/writere.txt','\nwelcome to   cave\n ',(err)=>{
    if (err) throw err;
})

