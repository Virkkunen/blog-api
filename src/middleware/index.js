const auth = require('./auth');
const { validateUpdatePost, validateNewPost } = require('./validate');

module.exports = {
  auth, 
  validateUpdatePost, 
  validateNewPost, 
};