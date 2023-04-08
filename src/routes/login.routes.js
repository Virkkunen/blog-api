const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers');
const { validateLogin } = require('../middleware');

router.post('/', validateLogin, loginController.login);

module.exports = router;