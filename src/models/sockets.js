const BandList = require('./Band-list');


class Sockets {
  constructor(io) {
    this.io = io;
    this.bandlist= new BandList();
    this.socketsEvents();
  }
  socketsEvents() {
    this.io.on("connection", (socket) => {
      console.log("client connected");
      // emit all bands to the connected client
      socket.emit('current-list',this.bandlist.getbands());
      //vote for a band
      socket.on('voteband',(id)=>{
        this.bandlist.increasevotes(id)
        this.io.emit('current-list',this.bandlist.getbands());
      })
      socket.on('deleteband',({id})=>{
        this.bandlist.removeband(id)
        this.io.emit('current-list',this.bandlist.getbands());
      })
      socket.on('addband',({name})=>{
        this.bandlist.addband(name);
        this.io.emit('current-list',this.bandlist.getbands());
      })

    });
  }
}
module.exports = Sockets;
