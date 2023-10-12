const express = require("express");

// SETUP
const app = express();
const PORT = 8080;

// DATA
const users = [
  { id: 1, name: "Bruce" },
  { id: 2, name: "Ed" },
  { id: 3, name: "Ernie" },
];

// ROUTES

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>
    <form method="POST">
        <input name="username" type="text" />
        <button type="submit">GO</button>
    </form>
  `);
});

app.post("/", (req, res) => {
  res.redirect("/list");
});

app.get("/list", (req, res) => {
  const itemsHtml = users.map((user) => {
    return `<li><a href="/detail/${user.id}">${user.name}</a></li>`;
  });

  res.send(`<h1>List</h1>
  <ul>${itemsHtml.join("")}</ul>
  `);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);

  res.send(`<h1>Detail</h1><h2>${user.name}</h2>`);
});
// START LISTENER

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
