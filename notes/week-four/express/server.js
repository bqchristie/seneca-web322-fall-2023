const express = require("express");
//const expressLayouts = require("express-ejs-layouts");

const app = express();

// app.use(expressLayouts);
// app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");

// app.use(express.static("public"));

const port = 3000;
const users = require("./data/fakeUsers.json");

app.get("/", (req, res) => {
  res.render("index", { message: "hello" });
});

app.get("/list", (req, res) => {
  res.render("list", { users });
});

//

// app.get("/detail", (req, res) => {
//   //   const user = users.find((user) => user.id == req.params.id);
//   //   res.render("detail", { user });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
