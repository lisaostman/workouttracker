const express = require("express");
const mongoose = require("mongoose");
var apiJS = require('./routes.js');
var router = apiJS.router;

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = require("./workout.js");

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
