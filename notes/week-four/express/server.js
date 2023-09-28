/**
 * Why express if we can roll our own
 * Routing
 * Middleware
 * Template engines
 * Simplified Error handling
 * Static file serving
 * Perfornmace
 */

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const port = 3000;

const data = {
  message: "Welcome to the app",
  users: [
    { id: 1, name: "Bruce" },
    { id: 2, name: "Tara" },
    { id: 3, name: "Rey" },
  ],
};

app.get("/", (req, res) => {
  res.render("index", { message: data.message + new Date() });
});

app.get("/list", (req, res) => {
  res.render("list", { users: data.users });
});

app.get("/detail/:id", (req, res) => {
  res.render("detail");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
