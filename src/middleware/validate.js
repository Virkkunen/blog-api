const {
  updatePostSchema,
  newPostSchema,
  newCategorySchema,
  newUserSchema,
  loginSchema,
} = require('./schemas');

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

const validateNewCategory = (req, res, next) => {
  const validation = newCategorySchema.validate(req.body);
  if (validation.error) {
    res.status(400).json({ message: '"name" is required' });
    throw new Error(validation.error);
  }
  next();
};

const validateNewUser = (req, res, next) => {
  const validation = newUserSchema.validate(req.body);
  if (validation.error) {
    res.status(400).json({ message: validation.error.message });
    throw new Error(validation.error);
  }
  next();
};

const validateLogin = (req, res, next) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) {
    res.status(400).json({ message: 'Some required fields are missing' });
    throw new Error(validation.error);
  }
  next();
};

module.exports = {
  validateUpdatePost,
  validateNewPost,
  validateNewCategory,
  validateNewUser,
  validateLogin,
};