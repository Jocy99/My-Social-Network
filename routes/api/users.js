const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userControllers');

// GET all users
router.route('/').get(getUsers);

// GET single user by its id 
router.route('/:userId').get(getSingleUser);

// POST a new user
router.route('./:userId').post(createUser);

// PUT to update a user by its id
router.route('/:userId').put(updateUser);

// DELETE user by its ID
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// BONUS remove a users associated thoughts when deleted
// POST and DELETE a friend to a user's friend list
// api/users/:userID/friends/:friendId

module.exports = router;
