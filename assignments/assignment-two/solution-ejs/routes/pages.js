const express = require("express");
const users = require("../fakeUsers.json");
const { template, pagination, userCard } = require("../utils");

const pageRouter = express.Router();

pageRouter.get("/", (req, res) => {
  res.render("login");
});

pageRouter.post("/", (req, res) => {
  res.redirect(`/list`);
});

pageRouter.get("/list", (req, res) => {
  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

  res.render("list", {
    title: "list",
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

pageRouter.get("/detail/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render("detail", { user });
});

module.exports = pageRouter;
