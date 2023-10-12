const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  console.log("Handling get");

  res.send(`<h1>PATH ${req.path}<h1>List`);
});

userRoutes.post("/", (req, res) => {
  res.send(`<h1>PATH ${req.path}<h1>POST`);
});

userRoutes.put("/", (req, res) => {
  // delete from database
  res.send(`<h1>PATH ${req.path}<h1>PUT`);
});

userRoutes.delete("/", (req, res) => {
  // delete from database
  res.send(`<h1>PATH ${req.path}<h1>DELETE`);
});

userRoutes.get("/:id", (req, res) => {
  res.send(`<h1>PATH ${req.path}</h1><h2> ${req.params.id}</h2>`);
});

module.exports = userRoutes;
