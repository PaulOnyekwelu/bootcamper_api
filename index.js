const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
var colors = require("colors")

const connectDb = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDb()

const app = express();

app.get("/", (req, res) => {
  return res.send("hello");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.underline.bold));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1))
})
