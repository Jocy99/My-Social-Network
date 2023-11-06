const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userControllers');

// GET all users
router.route('/').get(getUsers).post(createUser);

// GET single user, POST PUT and DELETE by its id 
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// BONUS remove a users associated thoughts when deleted
// POST and DELETE a friend to a user's friend list
// api/users/:userID/friends/:friendId

module.exports = router;
