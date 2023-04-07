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

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ message: 'No users available' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: 'User does not exist' });
  }
};

module.exports = { createUser, getUsers, getUserById };