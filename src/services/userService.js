const tokenJwt = require('jsonwebtoken');
const { User } = require('../models');

const newUser = async (email, displayName, image, password) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return { status: 409, message: 'User already registered' };
  }
  await User.create({ displayName, email, password, image });
  const payload = { data: user };
  const token = tokenJwt.sign(payload, process.env.JWT_SECRET);
  return { status: 201, token };
};

const allUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } }); 
  return users;
};

const userId = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) return { message: 'User does not exist' };
  return user;
};

module.exports = {
  newUser,
  allUsers,
  userId,
};
