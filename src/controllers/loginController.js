const userService = require('../services/loginService');

const newUser = async (req, res) => {
  const { email, password } = req.body;
  const { status, token, message } = await userService.newUser(email, password);

  if (message) return res.status(status).json({ message });

  return res.status(status).json({ token });
};

module.exports = {
  newUser,
};
