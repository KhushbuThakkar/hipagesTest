// import * as express from 'express';

// const server = express();
// const port = 8080;

// server.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });

console.log("well well");
let db = require("./db");

// import * as connection from "./db";

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
let cors = require("cors");

// const mysql = require("mysql");
// // connection configurations
// const mc = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// // connect to database
// mc.connect();

// db.connect();

app.set("json spaces", 4);
app.disable("etag");
app.use(cors());
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.redirect("/api/invited"));

app.listen(port);

console.log("API server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/jobRoutes"); //importing route
routes(app); //register the route
