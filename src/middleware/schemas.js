const Joi = require('joi');

const updatePostSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
});

const newPostSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(3).required(),
  categoryIds: Joi.array().required(),
});

const newCategorySchema = Joi.object({
  name: Joi.string().min(3).required(),
});

const newUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  displayName: Joi.string().min(8).required(),
  image: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { 
  updatePostSchema, 
  newPostSchema,
  newCategorySchema,
  newUserSchema,
  loginSchema,
};