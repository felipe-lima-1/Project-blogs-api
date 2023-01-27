const { Router } = require('express');
const { validationsUser } = require('../middleware/validationsUser');
const { tokenValidation } = require('../middleware/validationsToken');
const userController = require('../controllers/userController');

const route = Router();

route.post('/', validationsUser, userController.newUser);
route.get('/', tokenValidation, userController.AllUsers);
route.get('/:id', tokenValidation, userController.userId);

module.exports = route;
