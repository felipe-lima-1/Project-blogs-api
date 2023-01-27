const { Router } = require('express');
const { validationLogin } = require('../middleware/validationsLogin');
const loginController = require('../controllers/loginController');

const route = Router();

route.post('/', validationLogin, loginController.newUser);

module.exports = route;
