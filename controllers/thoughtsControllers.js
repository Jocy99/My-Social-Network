const User = require("../models/user");
const Thought = require("../models/thoughts");

const thoughtsControllers = {
    // find thoughts from the db to respond to the front end
    async getThoughts(req, res) {
        try {
            const thoughts = await User.find()
            res.json(users)
        } catch (error) {
            console.error(error)
        }
    },
    // request single thought based on the thoughts ID in our db
    async 
} 