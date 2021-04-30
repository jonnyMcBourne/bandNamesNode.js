const Server = require('./server')
require('dotenv').config();

const newServer = new Server();
newServer.execute();