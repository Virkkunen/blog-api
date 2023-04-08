const express = require('express');

const router = express.Router();

const { categoryController } = require('../controllers');
const { auth, validateNewCategory } = require('../middleware');

router.use(auth);
router.post('/', validateNewCategory, categoryController.addCategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;