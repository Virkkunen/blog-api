const { getUser } = require('../services/login.service');
const { genToken } = require('../utils/auth');

const login = async (req, res) => {
  // find user
  const user = await getUser(req.body.email);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  // gen token
  const token = genToken(user);
  // return
  return res.status(200).json({ token });
};

module.exports = { login };