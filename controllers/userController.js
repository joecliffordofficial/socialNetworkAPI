const { Reaction, Thought, User } = require('../models')


// Get all Users -- GET

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        .populate('thoughts')
        .populate('friends')
        res.json(allUsers)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
 }

 // Get ONE user with friends and thoughts data -- GET

 const getOneUser = async (req, res) => {
     try {
         const oneUser = await User.findOne({_id: req.params.id})
         .populate('thoughts')
         .populate('friends')
         if(!oneUser) {
             res.status(404).json({message: "No user found!"})
         }
         res.json(oneUser)
     }
     catch (err) {
         console.log(err)
         res.status(500).json(err)
     }
 }

 // Add a new user -- POST

 const createUser = async (req, res) => {
     try {
         const newUser = await User.create(req.body)
         res.json(newUser)
     }
     catch (err) {
         console.log(err)
         res.status(500).json(err)
     }
 }

 // Update user by ID -- PUT

 const updateUser = async (req,res) => {
     try {
         const user = await User.findOneAndUpdate({_id: req.params.id}, req.body)
         res.json(user)
     }
     catch (err) {
         console.log(err)
         res.status(500).json(err)
     }
 }

 // Delete user -- DELETE

 const deleteUser = async (req,res) => {
     try {
         const user = await User.findOneAndDelete({_id: req.params.id})
         res.json(user)
     }
     catch (err) {
         console.log(err)
         res.status(500).json(err)
     }
 }


 // !!! FRIENDS !!!

 // Add new friend -- POST

 const addFriend = async (req, res) => {
     try {
         const friend = await User.findOneAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}})
         res.json(friend)
     }
     catch (err) {
         console.log(err)
         res.status(500).json(err)
     }
 }

 // Delete a friend -- DELETE

 const deleteFriend = async (req, res) => {
     try {
         const friend = await User.findOneAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}})
         res.json(friend)
     }
     catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
 }

 module.exports = {
     getUsers,
     getOneUser,
     createUser,
     updateUser,
     deleteUser,
     addFriend,
     deleteFriend
 }