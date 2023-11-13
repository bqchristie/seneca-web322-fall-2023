const express = require("express");
const apiRoutes = express.Router();
const UsersService = require("../models/users.service");

apiRoutes.get("/users", (req, res) => {
  res.json(UsersService.find());
});

apiRoutes.get("/users/:id", (req, res) => {
  res.json(UsersService.findById(req.params.id));
});
apiRoutes.delk;

apiRoutes.post("/authenticate", (req, res) => {
  res.json({ isAuthenticated: true });
});

module.exports = apiRoutes;
