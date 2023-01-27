const { Router } = require('express');
const { validationsUser } = require('../middleware/validationsUser');
const userController = require('../controllers/userController');

const route = Router();

route.post('/', validationsUser, userController.newUser);

module.exports = route;
