const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

// Set up storage engine for Multer (for file uploads)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

// Express body parser middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.post("/form-handler", upload.single("file"), (req, res) => {
  // req.body contains the text inputs
  console.log("Text fields:", req.body);

  // req.file contains information about the file input
  if (req.file) {
    console.log("Received file:", req.file);
  }

  // Send a response back to the client
  res.send("<a href='/'>Back</a>");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
