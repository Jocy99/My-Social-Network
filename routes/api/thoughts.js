const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtsControllers.js');

// GET all thoughts and post new thought
router.route('/thoughts').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    // GET a single thought by its :id
    .get(getSingleThought)
    // edit post by :id
    .put(updateThought)
    // delete thought by id
    .delete(deleteThought);
    
module.exports = router;
