const express = require("express");
const http = require("http");
const socketIo = require("socket.io");


const mongoose = require("mongoose");

const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static("public"));  
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("startAssessmentRequest", () => {
    io.emit("startAssessment");
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(
    `mongodb+srv://vfathahu123:${process.env.MONGODB_PASSWORORD}@cluster1.i60wabz.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
  })
  .catch((err) => console.log(err));

  