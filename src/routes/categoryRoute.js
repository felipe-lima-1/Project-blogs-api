const { Router } = require('express');
const { tokenValidation } = require('../middleware/validationsToken');
const categoryController = require('../controllers/categoryController');

const route = Router();

route.post('/', tokenValidation, categoryController.newCategory);

module.exports = route;