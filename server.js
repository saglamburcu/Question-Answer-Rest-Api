const express = require("express");
const dotenv = require("dotenv");
const router = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase")

// Environment Variables
dotenv.config({
  path: "./config/env/config.env"
})

// MongoDB Connection
connectDatabase();

const app = express();
const PORT = process.env.PORT;

// Routers Middleware
app.use("/api", router);

app.listen(PORT, (req, res) => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`)
})