const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');


// /api/thoughts GET

router.route('/').get(getAllThoughts);

// /api/thoughts/:id GET, PUT and DELETE

router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// /api/thoughts/:userId POST

router.route('/:userId').post(createThoughts);

// /api/thoughts/:thoughtId/reactions POST

router.route('/:thoughtId/reactions/:reactionId').post(addReaction);

// /api/thoughts/:thoughtId/reactionId DELETE

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;