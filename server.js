import http from 'http'
const Port=3500

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
})

server.listen(Port,()=>console.log(`serveris listening on ${Port}`))
export default server;