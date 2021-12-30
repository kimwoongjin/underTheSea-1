//require("dotenv").config();
const express = require("express");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
//const jwt = require("jsonwebtoken");
// const { authToken } = require("./middleware/token");
//const db = require("./db/connection");
//const controllers = require("./controllers");
//const indexRouter = require("./routes");

const port = 80;

//const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);
//app.use(cookieParser());

app.get("/", function (req, res) {
  res.status(200).send("hello world");
});
// app.get("/status", (req, res) => {
//   db.query("use test", (err) => {
//     if (err) {
//       return res.status(400).send("DB Not Connected");
//     }
//     return res.status(200).send("DB connected!!!!!");
//   });
// });
// app.use("/", indexRouter);

let server;
server = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});

module.exports = server;
