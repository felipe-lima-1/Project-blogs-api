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

const userId = async (req, res) => {
  const { id } = req.params;
  const user = await userService.userId(id);
  if (user.message) return res.status(404).json({ message: user.message });
  return res.status(200).json(user);
};

module.exports = {
  newUser,
  AllUsers,
  userId,
};
