const { User } = require('../models');

const addUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getUsers = async () => {
  // findAll e tirar password
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const deleteUser = async (id) => {
  const result = await User.destroy({ where: { id } });
  return result;
};

module.exports = { addUser, getUsers, getUserById, deleteUser };