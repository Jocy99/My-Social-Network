const { Schema, model } = require("mongoose");

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
      ref: "Users", // self refrence to the user model
    },
  ],
});

const Users = model('Users', userSchema);

module.exports = Users;