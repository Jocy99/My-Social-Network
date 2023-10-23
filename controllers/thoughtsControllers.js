const User = require("../models/Users");
const Thought = require("../models/Thought");

const thoughtsControllers = {
    // find thoughts from the db to respond to the front end
    async getThoughts(req, res) {
        try {
            const thoughts = await User.find()
            res.json(User)
        } catch (error) {
            console.error(error)
        }
    },
    // request single thought based on the thoughts ID in our db
    async getSingleThought(req, res) {
        try {
            const singleThought = await Thought.findOne({_id: req.params.thoughtId})
            res.json(singleThought)
        } catch (error) {
            console.error(error.stack)
        }
    },
    // this function creates new thought to our db
    async createThought(req, res) {
        try {
            const createThought = await Thought.create(req.body)
            res.json(createThought)
        } catch (error) {
            console.error(error)
        }
    },
    // updates thought based on ID
    async updateThought(req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $set: req.body,
            },
            {
                new: true,
            },
            )
            res.json(updateThought)
        } catch (error) {
            console.error(error.stack)
        }
    },
    // allow user to delete thought by thought ID
    async deleteThought(req, res) {
        try {
            const deleteThought = await User.findByIdAndDelete(
                {
                    _id: req.params.thoughtId
                }
            )
            res.json(deleteThought)
        } catch (error) {
            console.error(error.stack)
        }
    }
}; 

module.exports = thoughtsControllers;