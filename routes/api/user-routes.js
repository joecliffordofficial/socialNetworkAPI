const router = require('experrss').Router();

const { route } = require('..');
const {
    getAllUsers, 
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/usersController');

// /api/users GET and POST

router.route('/').get(getAllUsers).post(createUsers);

// /api/users/:id GET, PUT, and DELETE

router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// /api/users/:id/friends/:friendId POST and DELETE

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);




module.exports = router;