const mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = new Schema({
  firstName: String,
  lastName: String,
  company: String,
  email: String,
});

module.exports = mongoose.model("users", userSchema);
