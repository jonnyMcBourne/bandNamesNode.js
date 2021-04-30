console.log("hola mundo ");
const socket=io('http://localhost:3000');
socket.on('current-list',(bandlist)=>{
    console.log(bandlist)
} )