const express = require("express");
const users = require("../fakeUsers.json");
const { template, pagination, userCard } = require("../utils");

const pageRouter = express.Router();

pageRouter.get("/", (req, res) => {
  const content = loginForm();
  const html = template("Login", content);
  res.send(html);
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

  const userTableHeaderRowHtml = `<tr>  
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    </thead>
    </tr>`;

  const userTableRowsHtml = filteredUsers.map((user) => {
    return `
    <tr>
        <td><a href="/detail/${user.id}">${user.id}</a></td>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.company}</td>
    </tr>
    `;
  });

  const paginationHtml = pagination(page);
  const userTableHTML = `
  <table class='table'>
    <thead>
        ${userTableHeaderRowHtml}
    </thead>
    <tbody>
        ${userTableRowsHtml.join("")}  
    </tbody>
  </table>
  ${paginationHtml}
  `;
  const html = template("List", userTableHTML);
  res.send(html);
});

pageRouter.get("/detail/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  const html = template("Detail", userCard(user));
  res.send(html);
});

module.exports = pageRouter;
