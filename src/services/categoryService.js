const { Category } = require('../models');

const newCategory = async (name) => {
    const category = await Category.create({ name });
    return category;
};

const allCategories = async () => {
    const categories = await Category.findAll();
    return categories;
    };

module.exports = {
    newCategory,
    allCategories,
};