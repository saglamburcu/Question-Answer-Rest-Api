const express = require("express");
const dotenv = require("dotenv");
const router = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middewares/errors/customErrorHandler");
const path = require("path");

// Environment Variables
dotenv.config({
  path: "./config/env/config.env"
})

// MongoDB Connection
connectDatabase();

const app = express();
const PORT = process.env.PORT;

// Express - Body Middleware
app.use(express.json());

// Routers Middleware
app.use("/api", router);

// Error Handler
app.use(customErrorHandler);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, (req, res) => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`)
})