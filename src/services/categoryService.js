const { Category } = require('../models');

const newCategory = async (name) => {
    const category = await Category.create({ name });
    return category;
};

module.exports = {
    newCategory,
};