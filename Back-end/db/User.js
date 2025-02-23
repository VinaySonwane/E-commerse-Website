const mongoose = require("mongoose");

//schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//model
const User = mongoose.model("User", UserSchema);

module.exports = User;
