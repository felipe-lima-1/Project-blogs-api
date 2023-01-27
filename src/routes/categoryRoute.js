const { Router } = require('express');
const { tokenValidation } = require('../middleware/validationsToken');
const categoryController = require('../controllers/categoryController');

const route = Router();

route.post('/', tokenValidation, categoryController.newCategory);
route.get('/', tokenValidation, categoryController.allCategories);

module.exports = route;