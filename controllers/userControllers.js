const User = require("../models/user");
const Thought = require("../models/thoughts");

const userControllers = {
    // tap into db to find users responds to the front end
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
            const singleUser = await User.findOne({_id: req.params.id})
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
                    _id: req.params.id
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
                    _id: req.params.id
                }
            )
            res.json(deleteUser)
        } catch (error) {
            console.error(error)
        }
    }
}

// create the same functions for created and deleting thoughts