const express = require("express");
const users = require("./fakeUsers.json");
const app = express();
const port = 3000;

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ROUTE HANDLING
app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", (req, res) => {
  res.redirect(`/list`);
});

app.get("/list", (req, res) => {
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

app.get("/detail/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render("detail", { user });
});

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
