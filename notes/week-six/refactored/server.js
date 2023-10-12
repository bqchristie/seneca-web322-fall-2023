const expresss = require("express");
const PORT = 8000;
const app = expresss();
const { logger, timer } = require("./middleware");
const routes = require("./routes");

app.use([logger, timer]);

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
