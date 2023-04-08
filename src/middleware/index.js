const auth = require('./auth');
const { 
  validateUpdatePost, 
  validateNewPost, 
  validateNewCategory,
  validateNewUser,
  validateLogin,
} = require('./validate');

module.exports = {
  auth, 
  validateUpdatePost, 
  validateNewPost, 
  validateNewCategory,
  validateNewUser,
  validateLogin,
};