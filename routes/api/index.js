const router = require('express').Router();
// const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
// router.use('/students', studentRoutes);

module.exports = router;
