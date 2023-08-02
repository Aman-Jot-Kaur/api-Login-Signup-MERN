const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { PORT } = process.env;
const connectionUrl = "mongodb://0.0.0.0:27017/LoginSignup";


app.use('/', require("./routes/userRoutes"));


const { MONGODB_CONNECTION } = process.env;
console.log(MONGODB_CONNECTION);
mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`Example app listening on port `, PORT || 3000);
    })
  )
  .catch((err) => console.log(err));
