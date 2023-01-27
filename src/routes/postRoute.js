const { Router } = require('express');
const { tokenValidation } = require('../middleware/validationsToken');
const postController = require('../controllers/postController');

const route = Router();

route.get('/', tokenValidation, postController.getAll);

module.exports = route;