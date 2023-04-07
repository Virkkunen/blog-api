const express = require('express');

const router = express.Router();

const { postController } = require('../controllers');
const { auth } = require('../middleware');

router.use(auth);
router.post('/', postController.addPost);
router.get('/', postController.getPosts);

module.exports = router;