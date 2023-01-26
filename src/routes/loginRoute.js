const { Router } = require('express');
const { validationLogin } = require('../services/validationsUser');
const userController = require('../controllers/userController');

const route = Router();

route.post('/', validationLogin, userController.newUser);

module.exports = route;