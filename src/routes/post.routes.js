const express = require('express');

const router = express.Router();

const { postController } = require('../controllers');
const { auth, validateUpdatePost, validateNewPost } = require('../middleware');

router.use(auth);
router.post('/', validateNewPost, postController.addPost);
router.get('/search', postController.findPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', validateUpdatePost, postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;