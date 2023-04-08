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

module.exports = { updatePostSchema, newPostSchema };