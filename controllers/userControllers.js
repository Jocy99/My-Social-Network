const User = require("../models/Users");
const Thought = require("../models/Thought");

const userControllers = {
    // tap into db to find users and responds to the front end
   async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            console.error(error)
        }
    },
// requests single user information based off of user ID
    async getSingleUser(req, res) {
        try {
            const singleUser = await User.findOne({_id: req.params.userId})
            res.json(singleUser)
        } catch (error) {
            console.error(error)
        }
    },
// this function allows new user to created
    async createUser(req, res) {
        try {
            const createdUser = await User.create(req.body)
            res.json(createdUser)
        } catch (error) {
            console.error(error)
        }
    },
// updates user info based on ID
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                {
                    _id: req.params.userId
                },
                {
                   $set: req.body, 
                },
                {
                    new: true,
                }
            )
            res.json(updatedUser)
        } catch (error) {
            console.error(error)
        }
    },
// allows user to be deleted by requested id
    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findByIdAndDelete(
                {
                    _id: req.params.userId
                }
            )
            res.json(deleteUser)
        } catch (error) {
            console.error(error.stack)
        }
    }
};

module.exports = userControllers;