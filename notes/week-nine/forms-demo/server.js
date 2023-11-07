const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// Express body parser middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.post("/form-handler", (req, res) => {
  // req.body contains the text inputs
  console.log("Text fields:", req.body);
  const date = req.body.date;
  let realDate = null;

  if (date) {
    realDate = Date(date).toString();
  }
  console.log(date);
  console.log(realDate);
  // Send a response back to the client
  res.send("<a href='/'>Back</a>");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
