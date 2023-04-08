const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { auth, validateNewUser } = require('../middleware');

router.post('/', validateNewUser, userController.createUser);
router.get('/', auth, userController.getUsers);
router.get('/:id', auth, userController.getUserById);

module.exports = router;