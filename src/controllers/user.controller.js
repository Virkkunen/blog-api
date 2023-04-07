const { userService } = require('../services');
const { genToken } = require('../utils/auth');
const { validateNewUser } = require('../utils/validateInfo');

const createUser = async (req, res) => {
  // try catch
  try {
    // destructure
    const { displayName, email, password, image } = req.body;
    // validate
    // variavel pra poder tirar a mensagem do erro
    const { error } = validateNewUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    // create
    const user = await userService.addUser(displayName, email, password, image);
    // gen token
    const token = genToken(user.email);
    // return
    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = { createUser };