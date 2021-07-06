const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
var colors = require("colors");

// controllers
const bootcamps = require("./routes/bootcamps");

const connectDb = require("./config/db");

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDb();

const app = express();

// parse json
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.underline
      .bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
