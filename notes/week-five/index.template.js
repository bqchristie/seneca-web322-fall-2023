const express = require("express");

const app = express();
const port = 3000;

const users = [
  { id: 1, name: "Bruce" },
  { id: 2, name: "Ed" },
  { id: 3, name: "Ernie" },
];

// DRY - Do not repeat yourself

const menu = `<nav><a href="/">Home</a>&nbsp;|&nbsp;<a href="/list">List</a></div>`;

const template = function (title, html) {
  return `<html>
    <head>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />
    </head>
    <body class="container">
        <div>${menu}</div>
        <h1>${title}</h1>
        <div>
            ${html}
        </div> 
    </body>
    </html>`;
};

// ROUTE HANDLING
app.get("/", (req, res) => {
  const content = `<form method="POST"><input type="text" name="username" /><input type="password" name="password" /><button class="btn btn-primary" type="submit">GO!</button></form>`;
  const html = template("Login", content);
  res.send(html);
});

app.post("/", (req, res) => {
  res.send(`Logged in`);
});

app.get("/list", (req, res) => {
  const userListHtml = users.map((user) => {
    return `<li><a href="/detail/${user.id}">${user.name}</a></li>`;
  });

  const content = `<ul>${userListHtml}</ul>`;

  const html = template("List", content);
  res.send(html);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => {
    return user.id == id;
  });

  const content = `<div>${id} ${user.name}</div>`;
  const html = template("Detail", content);

  res.send(html);
});

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
