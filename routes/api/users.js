const router = require('express').Router();
// GET all users


// GET single user by its id and populated thought and friend data


// POST a new user


// PUT to update a user by its id


// DELETE user by its ID


// BONUS remove a users associated thoughts when deleted


// POST and DELETE a friend to a user's friend list
// api/users/:userID/friends/:friendId


// /api/thoughts
// GET to get all thoughts
// GET to get a single thought by its :id
// POST to create a new thought (don't forget to push the created thought's 
// id to the associated user's thoughts array field)

// PUT to update a thought by its ID

//  DELETE to remove a thought by its id


//  /api/thoughts/:thoughtId/reactions
// post to create a reaction stored in a single thoughts reasions array field
// delete to pull and remove a reaction by the reactions id value
module.exports = router;
