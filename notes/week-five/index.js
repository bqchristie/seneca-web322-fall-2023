const express = require("express");

const app = express();
const port = 3000;

const users = [
  { id: 1, name: "Bruce" },
  { id: 2, name: "Ed" },
  { id: 3, name: "Ernie" },
];

const menu = `<nav><a href="/">Home</a>&nbsp;|&nbsp;<a href="/list">List</a></div>`;

// ROUTE HANDLING
app.get("/", (req, res) => {
  res.send(
    `${menu}<h1>Login</h1><form method="POST"><input type="text" name="username" /><input type="password" name="password" /><button type="submit">GO!</button></form>`
  );
});

app.post("/", (req, res) => {
  res.send(`Logged in`);
});

app.get("/list", (req, res) => {
  const userListHtml = users.map((user) => {
    return `<li><a href="/detail/${user.id}">${user.name}</a></li>`;
  });

  console.log(userListHtml);

  res.send(`${menu}
    <h1>List<h1>
    <ul>
        ${userListHtml}
    </ul>
  `);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => {
    return user.id == id;
  });

  res.send(`${menu}<h1>Detail<h1>
    <div>${id} ${user.name}</div>`);
});

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
