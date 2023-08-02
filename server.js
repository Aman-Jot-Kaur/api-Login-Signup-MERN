const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionUrl = "mongodb://0.0.0.0:27017/LoginSignup";


app.use('/', require("./routes/userRoutes"));


const { MONGODB_CONNECTION } = process.env;
console.log(MONGODB_CONNECTION);
mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
   
  console.log("connected to mongo")
  )
  .catch((err) => console.log(err));

  module.exports=app