// define mongoose to a variable
// const mongoose = require("mongoose");
const { Schema, Types } = require("mongoose");


//  create a new instance of mongoose schema to define the structure of User documents
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought", // refrence the Thought model
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // self refrence to the user model
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;