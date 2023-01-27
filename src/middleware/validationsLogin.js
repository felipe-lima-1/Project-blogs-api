const validUser = (email, password, res) => {
  if (!email) {
 return res
      .status(400)
      .json({ message: 'Some required fields are missing' }); 
}

  if (!password) {
 return res
      .status(400)
      .json({ message: 'Some required fields are missing' }); 
}

  return null;
};

const validationLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errorUser = validUser(email, password, res);
  if (errorUser !== null) return validUser;

  next();
};

module.exports = {
  validationLogin,
};
