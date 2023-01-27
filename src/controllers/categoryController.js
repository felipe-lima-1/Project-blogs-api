const categoryService = require('../services/categoryService');

const newCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const category = await categoryService.newCategory(name);
  return res.status(201).json(category);
};

module.exports = {
    newCategory,
};