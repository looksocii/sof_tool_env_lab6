const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello 61070139 !!");
});

module.exports = app;
