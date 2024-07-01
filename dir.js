const fs=require('fs');
// fs.mkdir("./new",(err)=>{
//     if(err) throw err
// })
if (!fs.existsSync("./new")){
    fs.mkdirSync("./new");
}