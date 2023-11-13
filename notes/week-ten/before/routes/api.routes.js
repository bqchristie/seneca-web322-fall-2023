const express = require("express");
const UsersService = require("../services/users.service");
apiRoutes = express.Router();

apiRoutes.get("/users", (req, res) => {
  res.json(UsersService.find());
});

apiRoutes.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = UsersService.findById(id);
  res.json(user);
});

module.exports = apiRoutes;
