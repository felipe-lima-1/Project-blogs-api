const categoryService = require('../services/categoryService');

const newCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const category = await categoryService.newCategory(name);
  return res.status(201).json(category);
};

const allCategories = async (req, res) => {
    const categories = await categoryService.allCategories();
    return res.status(200).json(categories);
    };

module.exports = {
    newCategory,
    allCategories,
};