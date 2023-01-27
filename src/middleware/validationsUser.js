  const validationsUser = (request, response, next) => {
    const regexEmail = /\S+@\S+\.\S+/;
    const { displayName, email, password } = request.body;

    if (!regexEmail.test(email)) {
        response.status(400).json({ message: '"email" must be a valid email' });
        return;
    }
    if (displayName.length < 8) {
        response.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
        return;
    }

    if (password.length < 6) {
        response.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
        return;
    }

    next();
  };

    module.exports = {
      validationsUser,
    };