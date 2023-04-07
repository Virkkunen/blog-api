const Joi = require('joi');

const validateBody = (body) => {
  const bodySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return bodySchema.validate(body);
};

const validateNewUser = (body) => {
  const bodySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    displayName: Joi.string().min(8).required(),
    image: Joi.string(),
  });

  return bodySchema.validate(body);
};

const validateNewCategory = (body) => {
  const bodySchema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return bodySchema.validate(body);
};

const validateNewPost = (body) => {
  const bodySchema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(3).required(),
    categoryIds: Joi.array().required(),
  });

  return bodySchema.validate(body);
};

module.exports = { validateBody, validateNewUser, validateNewCategory, validateNewPost };