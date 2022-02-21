const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const http = require("http");
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./app/config/constant');
const socketio = require("socket.io");

// Connection Mongo Db
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

require('./app/utils/passport.util')(passport);



const app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});
app.use(cors('*'))
const userRoutes = require('./app/routes/user.route');
app.use('/', userRoutes);
const PORT = process.env.PORT || 830;


const server = http.createServer(app);
const io = socketio(server, {
  cors: {
      origin: "*",
      methods: ["GET", "POST"]
  }
});

const chatHandler = require("./app/handlers/chatHandler");

const onNewWebsocketConnection = (socket) => {
  chatHandler(io, socket);
  socket.on("connect_error", (err) => {
      console.log(err instanceof Error);
      console.log(err.message);
      console.log(err.data);
  });    
  socket.on("disconnect", () => {
      try {             
          console.info(`Socket ${socket.id} has disconnected.`);  
          
      } catch (error) {
          
      }
  });
  socket.broadcast.emit("send:message", "world");

}

io.on("connection", onNewWebsocketConnection);

server.listen(PORT, () => console.info(`Listening on port ${PORT}.`));