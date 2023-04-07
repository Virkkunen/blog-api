const express = require('express');

const router = express.Router();

const { categoryController } = require('../controllers');
const { auth } = require('../middleware');

router.use(auth);
router.post('/', categoryController.addCategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;