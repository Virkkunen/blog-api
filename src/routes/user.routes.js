const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { auth } = require('../middleware');

router.post('/', userController.createUser);
router.get('/', auth, userController.getUsers);

module.exports = router;