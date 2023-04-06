const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
    } = require('../../controllers/userController');

    router.route('/').get(getUsers).post(createUser);
    router.route('/:userid').get(getSingleUser).delete(deleteUser).put(updateUser);
    router.route('/:userid/friends/:friendId').post(addFriend).delete(deleteFriend);

    module.exports = router;