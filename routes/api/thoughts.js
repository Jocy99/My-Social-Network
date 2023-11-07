const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtsControllers.js');

// /api/thoughts/:thoughtId 

// GET all thoughts and post new thought
router.route('/').get(getThoughts).post(createThought);

// GET a single thought by its :id, edit post by :id, & delete thought by id

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
    
module.exports = router;
