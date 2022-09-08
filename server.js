const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routers/auth");
const question = require("./routers/question");

// Environment Variables
dotenv.config({
  path: "./config/env/config.env"
})

const app = express();
const PORT = process.env.PORT;

// Routers Middleware
app.use("/api/auth", auth);
app.use("/api/questions", question);

app.listen(PORT, (req, res) => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`)
})