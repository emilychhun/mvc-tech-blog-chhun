let router = require('express').Router();

let userRoutes = require('./user-routes');
let postRoutes = require('./post-routes');
let commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;