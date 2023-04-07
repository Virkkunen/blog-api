const Joi = require('joi');

const validateBody = (body) => {
  const bodySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return bodySchema.validate(body);
};

module.exports = { validateBody };