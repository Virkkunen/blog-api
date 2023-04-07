const { categoryService } = require('../services');
const { validateNewCategory } = require('../utils/validateInfo');

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (validateNewCategory(req.body).error) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const category = await categoryService.addCategory(name);
    return res.status(201).json(category);
  } catch (err) {
    console.error(err);
    return res.status(409).json({ message: err.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    return res.status(409).json({ message: err.message });
  }
};

module.exports = { addCategory, getAllCategories };