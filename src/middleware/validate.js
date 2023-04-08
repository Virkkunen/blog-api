const { updatePostSchema, newPostSchema } = require('./schemas');

const validateUpdatePost = (req, res, next) => {
  const validation = updatePostSchema.validate(req.body);
  if (validation.error) {
    res.status(400).json({ message: 'Some required fields are missing' });
    throw new Error(validation.error);
  }
  next();
};

const validateNewPost = (req, res, next) => {
  const validation = newPostSchema.validate(req.body);
  if (validation.error) {
    res.status(400).json({ message: 'Some required fields are missing' });
    throw new Error(validation.error);
  }
  next();
};

module.exports = {
  validateUpdatePost, 
  validateNewPost,
};