const { Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{
    toJSON:{
        getters: true,
},
_id: false,
id: false,
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: timestamp () get date format from mini project
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},{
    toJSON:{
        getters: true,
},
id: false,
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;