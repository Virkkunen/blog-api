const { getUser } = require('../services/login.service');
const { genToken } = require('../utils/auth');
const { validateBody } = require('../utils/validateInfo');

const login = async (req, res) => {
  // const { body } = req;
  // desestruturar não funciona
  // validate
  if (validateBody(req.body).error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  // find user
  const user = await getUser(req.body.email);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  // gen token
  const token = genToken(user);
  // return
  return res.status(200).json({ token });
};

module.exports = { login };