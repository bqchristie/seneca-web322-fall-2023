const express = require("express");
const app = express();
const router = express.Router();
let users = require("./fakeUsers.json");

const PORT = 3000;

app.use(express.static("public"));

router.get("/users", (req, res) => {
  // 1. express serialize JSON.stringify
  // 2. sets content type to appication-json
  const filteredUsers = users;
  const obj = {
    data: filteredUsers,
    count: filteredUsers.length,
  };

  res.json(obj);
});

router.get("/users/:id", (req, res) => {
  console.log("Get user" + req.params.id);

  const user = users.find((user) => {
    return user.id == req.params.id;
  });
  res.json(user);
});

router.delete("/users/:id", (req, res) => {
  console.log("Delele user" + req.params.id);

  users = users.filter((user) => {
    return user.id != req.params.id;
  });
  console.log(users.length);
  res.json({ message: "user deleted" });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});
