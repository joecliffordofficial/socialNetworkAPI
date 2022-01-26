const { Users } = require('../models')
const { db } = require('../models/Thoughts')

const usersController = {

    // Create a new user

    createUsers({body}, res) {
        Users.create(body)
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => res.status(400).json(err))
    },

    // Get all users

    getUsersById({params}, res) {
        Users.findOne ({_id: params.id})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')

        // if no user is found

        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: "No user found!"})
                return;
            }
            res.json(dbUsersData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    // Update User by ID

    updateUsers({params, body}, res) {
        Users.findOneAndUpdate({_id: params.id}, body, {new:true, runValidators: true})
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: "No user found!"})
                return;
            }
            res.json(dbUsersData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    // Delete User by ID

    deleteUsers({params}, res) {
        Users.findOneAndDelete({_id: params.id})
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: "No user found!"})
                return
            }
            res.json(dbUsersData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    // Add a new friend

    addFriend({params}, res) {
        Users.findOneAndUpdate({_id: params.id}, {$push: { friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: "No User found!"})
                return
            }
            res.json(dbUsersData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    // Delete a current friend

    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({_id: params.id},{$pull: {friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: "No user found!"})
                return
            }
            res.json(dbUsersData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }
};



module.exports = usersController;