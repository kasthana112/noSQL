const router = require('mongoose').Router();
const{
    getAllUsers,
    getUserById,
    postUser,
    updateUserById,
    deleteUserById
    } = require('../../controllers/user-controller');

    router.route('/').get(getAllUsers).post(createUser);
