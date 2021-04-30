const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const path      = require('path');
const cors      = require('cors');

const Sockets   =require('./src/models/sockets')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT||8080
        this.server = http.createServer(this.app);
        this.io = socketio(this.server)
    };
    runcors(){
        this.app.use(cors());
    }
    middlewares(){
        this.app.use(express.static(path.resolve(__dirname+'/public'))) 
    }

    listen(){
        this.server.listen(this.port,()=>{console.log("server listening at port",this.port)})
    }

    configSockets(){
        new Sockets(this.io)
    }

    execute(){
        this.runcors();
        this.middlewares()
        this.listen()
      
        this.configSockets()
        
    }
}
module.exports=Server