const express = require("express");
const clientSessions = require("client-sessions");
const pageRoutes = require("./routes/page.routes");
const apiRoutes = require("./routes/api.routes");
const { connect, sync } = require("./db");
const app = express();
const port = 3000;

async function init() {
  await connect();
  await sync();
}
//DATABASE connection
init();

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//body parser
app.use(express.urlencoded());

// Set the JSON middleware
app.use(express.json());

// Add client session
app.use(
  clientSessions({
    cookieName: "session",
    secret: "SECRET",
    duruation: 20000000000,
    activeDuration: 2000000,
  })
);

// conditonally check authntication
app.use((req, res, next) => {
  const path = req.path;
  if (path === "/" || path.includes("/api")) {
    next();
  } else {
    if (req?.session?.auth?.isAuthenticated) {
      next();
    } else {
      res.redirect("/");
    }
  }
});

// ROUTE HANDLING
app.use(pageRoutes);
app.use("/api", apiRoutes);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
