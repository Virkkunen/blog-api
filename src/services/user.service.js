const { User } = require('../models');

const addUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

module.exports = { addUser };