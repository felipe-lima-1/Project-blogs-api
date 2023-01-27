const userService = require('../services/userService');

const newUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, token } = await userService.newUser(
    email,
    displayName,
    image,
    password,
  );
  if (!message) {
    return res.status(status).json({ token });
  }
  return res.status(status).json({ message });
};

const AllUsers = async (req, res) => {
  const users = await userService.allUsers();
  return res.status(200).json(users);
};

module.exports = {
  newUser,
  AllUsers,
};
