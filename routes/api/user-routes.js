const router = require('express').Router()
const { getUsers, createUser, getOneUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')


// GET all users and POST a new user
router.route('/').get(getUsers).post(createUser)

//GET one user, PUT update a user, and DELETE one user
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser)

//POST for new friend to a user and DELETE a friend from a user's friends
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)



module.exports = router