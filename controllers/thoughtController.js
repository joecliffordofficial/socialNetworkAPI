const { Thought, User} = require('../models');


// Get ALL Thought -- GET
const getThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find()
        res.json(allThoughts)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Get ONE Thought -- GET

const getOneThought = async (req, res) => {
    try {
        const oneThought = await Thought.findOne({_id: req.params.id})
        res.json(oneThought)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Make new Thought -- POST

const newThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        const user = await User.findOneAndUpdate({ username: req.body.username}, { $push: {thoughts: thought._id}})
        res.json({ thought, user })
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Update Thought by ID -- PUT

const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({_id: req.params.id}, req.body)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete Thought by ID -- DELETE

const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({_id: req.params.id})
        res.json(thought)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}



// !!! REACTIONS !!!

// Make a new reaction -- POST

const postReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.id}, {$push: {reactions: req.body}})
        console.log(reaction)
        res.json(reaction)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete a reaction -- DELETE

const deleteReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({_id: req.params.id}, {$push: {reaction: req.body}})
        console.log(reaction)
        res.json(reaction)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports = {
    getThoughts,
    getOneThought,
    newThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction
}
