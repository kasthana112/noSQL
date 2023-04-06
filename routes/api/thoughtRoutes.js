const router = require('express').Router();
const{
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
    } = require('../../controllers/thoughtController');

    router.route('/').get(getThought).post(createThought);
    router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);
    router.route('/:thoughtId').post(addReaction);
    router.route('/:thoughtId').delete(deleteReaction);

    module.exports = router;