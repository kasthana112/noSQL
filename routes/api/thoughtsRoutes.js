const router = require('express').Router();
const{
    getThoughts,
    getSingleThoughts,
    createThoughts,
    deleteThoughts,
    updateThoughts
    } = require('../../controllers/thoughts-controller');

    router.route('/').get(getThoughs).post(createThoughts);
    router.route('/:id').get(getSingleThoughts).delete(deleteThoughts).put(updateThoughts);


    module.exports = router;