const { categoryService } = require('../services');

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
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