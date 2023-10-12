const express = require("express");

const productRoutes = express.Router();

productRoutes.get("/", (req, res) => {
  res.send(`<h1>PATH ${req.path}<h1>List`);
});

productRoutes.post("/", (req, res) => {
  res.send(`<h1>PATH ${req.path}<h1>POST`);
});

productRoutes.put("/", (req, res) => {
  // delete from database
  res.send(`<h1>PATH ${req.path}<h1>PUT`);
});

productRoutes.delete("/", (req, res) => {
  // delete from database
  res.send(`<h1>PATH ${req.path}<h1>DELETE`);
});

productRoutes.get("/:id", (req, res) => {
  res.send(`<h1>PATH ${req.path}</h1><h2> ${req.params.id}</h2>`);
});

module.exports = productRoutes;
