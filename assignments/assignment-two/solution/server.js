const express = require("express");

const app = express();
const port = 3000;
const pageRouter = require("./routes/pages");

// ROUTE HANDLING
app.use(pageRouter);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
