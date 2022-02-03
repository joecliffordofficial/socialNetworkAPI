const router = require('express').Router()
const { getThoughts, getOneThought, newThought, updateThought, deleteThought, postReaction, deleteReaction } = require('../../controllers/thoughtController.js')


// GET all thoughts, POST new thoughts
router.route('/').get(getThoughts).post(newThought)


// GET one by _id & PUT update a thought & DELETE a thought
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)

// POST a reaction in a single thought's reaction
router.route('/:id/reactions').post(postReaction)


// DELETE to pull and remove a reaction by the reactionId 
router.route('/:id/reactions/:reactionId').delete(deleteReaction)
module.exports = router